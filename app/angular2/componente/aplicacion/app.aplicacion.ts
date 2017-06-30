import {Component} from '@angular/core';
import {SelectItem, MenuItem, Message} from 'primeng/primeng';
import {Aplicacion} from '../../modelo/aplicacion/aplicacion';
import {AplicacionService} from '../../servicio/aplicacion/aplicacionservice';
import {MenuService} from '../../servicio/menu/menuservice';

import 'rxjs/add/operator/catch';

class PrimeAplicacion implements Aplicacion {
    constructor(public idAplicacion?,
        public administradorAplicacion?,
        public estadoAplicacion?,
        public fechaInicioProduccion?,
        public nombreAplicacion?,
        public unidadDuena?,
        public eliminar?,
        public send?
    ) {}
}

@Component({
    templateUrl: 'app/angular2/componente/aplicacion/app.aplicacion.html',
    selector: 'my-app'
})
export class AplicacionComponent {
    gifAjax: boolean = false;
    displayDialog: boolean;
    app: Aplicacion = new PrimeAplicacion();
    selectedApp: Aplicacion;
    newCar: boolean;
    estadoApp: SelectItem[];
    lstAplicaciones: Aplicacion[];
    lstAppSend: Aplicacion[];
    itemsMenu: MenuItem[];
    msg: Message[] = [];
    itemStr: string;

    constructor(private aplicacionService: AplicacionService, private menuService: MenuService) {
        this.estadoApp = [];
        this.estadoApp.push({label: 'Activo', value: 'A'});
        this.estadoApp.push({label: 'Inactivo', value: 'I'});
        this.lstAppSend = [];
    }

    ngOnInit() {
        this.aplicacionService.getAplicacionMedium().then(lstAplicaciones => {
            this.lstAplicaciones = lstAplicaciones;
            for (let app of lstAplicaciones) {
                app.eliminar = false;
            }
            this.gifAjax = true;
        });
        this.itemsMenu = [
            {
                label: 'Nuevo',
                icon: 'fa-file-o',
                command: (event) => {this.showDialogToAdd(true)}
            },
            {
                label: 'Modificar',
                icon: 'fa-edit',
                command: (event) => {this.showDialogToAdd(false)}
            },
            {
                label: 'Guardar',
                icon: 'fa-save',
                command: (event) => {this.guardar()}
            }
        ];
    }

    guardar() {
        for (let app of this.lstAplicaciones) {
            if (app.send) {
                this.gifAjax = false;

                if (app.idAplicacion == null) {
                    this.lstAppSend.push(app);
                } else {
                    this.aplicacionService.updAplicacion(app)
                        .subscribe(res => {
                            this.gifAjax = true;
                            this.msg.push({severity: "info", summary: 'Información', detail: "Operación realizada con éxito."});
                        });
                }
            }
        }

        if (this.lstAppSend.length > 0) {
            this.aplicacionService.addAllAplicacion(this.lstAppSend).subscribe(
                (data) => {
                    console.log(data);

                    for (let app of JSON.parse(data)) {
                        console.log("elemento ", app);
                    }
                    //this.app.idAplicacion = data.idAplicacion;
                    this.gifAjax = true;
                    this.msg.push({severity: "info", summary: 'Información', detail: "Operación realizada con éxito."});
                }
            );
        }

        this.displayDialog = false;
    }

    aceptarEdicion() {
        this.app.send = true;

        if (this.newCar) {
            this.lstAplicaciones.push(this.app);
        } else {
            this.lstAplicaciones[this.findSelectedCarIndex()] = this.app;
        }
        //cerrar el dialogo
        this.cancelarEdicion();
    }

    cancelarEdicion() {
        this.app = new PrimeAplicacion();
        this.displayDialog = false
    }

    delete() {
        this.lstAplicaciones.splice(this.findSelectedCarIndex(), 1);
        this.app = null;
        this.displayDialog = false;
    }

    showDialogToAdd(nuevo: boolean) {
        this.newCar = nuevo;
        if (nuevo) {
            this.app = new PrimeAplicacion();
        }
        this.displayDialog = true;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.app = this.cloneAplicacion(event.data);
        this.app.fechaInicioProduccion = new Date(this.app.fechaInicioProduccion);
        console.log(this.app);
    }

    cloneAplicacion(c: Aplicacion): Aplicacion {
        let car = new PrimeAplicacion();
        for (let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }

    findSelectedCarIndex(): number {
        return this.lstAplicaciones.indexOf(this.selectedApp);
    }
}
