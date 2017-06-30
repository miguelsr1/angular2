import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Grupo } from '../../modelo/grupo/grupo';
import { AplicacionService } from '../../servicio/aplicacion/aplicacionservice';

import 'rxjs/add/operator/catch';

class PrimeGrupo implements Grupo {
    constructor(public idGrupo?,
        public nombreGrupo?) { }
}

@Component({
    templateUrl: 'app/angular2/componente/grupo/app.grupo.html',
    selector: 'my-app'
})
export class GrupoComponent {

    displayDialog: boolean;
    grupo: Grupo = new PrimeGrupo();
    selectedGrupo: Grupo;
    newGrupo: boolean;
    lstGrupos: Grupo[];
    menuBarra: MenuItem[];

    constructor(private aplicacionService: AplicacionService) {
    }

    ngOnInit() {
        this.aplicacionService.getGrupoMedium().then(lstGrupos => this.lstGrupos = lstGrupos);
        this.menuBarra = [
            { label: 'Nuevo', icon: 'fa-file-o' },
            { label: 'Modificar', icon: 'fa-edit' },
            {
                label: 'Guardar', icon: 'fa-save', command: (event) => { this.save() }
            }
        ];
    }

    showDialogToAdd() {
        this.newGrupo = true;
        this.grupo = new PrimeGrupo();
        this.displayDialog = true;
    }

    save() {
        if (this.newGrupo) {
            //this.aplicacionService.addAplicacion(this.grupo);
            this.lstGrupos.push(this.grupo);
        } else {
            //this.aplicacionService.updAplicacion(this.grupo);
            this.lstGrupos[this.findSelectedCarIndex()] = this.grupo;
        }
        this.grupo = new PrimeGrupo();
        this.displayDialog = false;
    }

    delete() {
        this.lstGrupos.splice(this.findSelectedCarIndex(), 1);
        this.grupo = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newGrupo = false;
        this.grupo = this.cloneAplicacion(event.data);
        //this.displayDialog = true;
    }

    cloneAplicacion(c: Grupo): Grupo {
        let car = new PrimeGrupo();
        for (let prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }

    findSelectedCarIndex(): number {
        return this.lstGrupos.indexOf(this.selectedGrupo);
    }
}