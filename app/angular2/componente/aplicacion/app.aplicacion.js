"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var aplicacionservice_1 = require("../../servicio/aplicacion/aplicacionservice");
var menuservice_1 = require("../../servicio/menu/menuservice");
require("rxjs/add/operator/catch");
var PrimeAplicacion = (function () {
    function PrimeAplicacion(idAplicacion, administradorAplicacion, estadoAplicacion, fechaInicioProduccion, nombreAplicacion, unidadDuena, eliminar, send) {
        this.idAplicacion = idAplicacion;
        this.administradorAplicacion = administradorAplicacion;
        this.estadoAplicacion = estadoAplicacion;
        this.fechaInicioProduccion = fechaInicioProduccion;
        this.nombreAplicacion = nombreAplicacion;
        this.unidadDuena = unidadDuena;
        this.eliminar = eliminar;
        this.send = send;
    }
    return PrimeAplicacion;
}());
var AplicacionComponent = (function () {
    function AplicacionComponent(aplicacionService, menuService) {
        this.aplicacionService = aplicacionService;
        this.menuService = menuService;
        this.gifAjax = false;
        this.app = new PrimeAplicacion();
        this.msg = [];
        this.estadoApp = [];
        this.estadoApp.push({ label: 'Activo', value: 'A' });
        this.estadoApp.push({ label: 'Inactivo', value: 'I' });
        this.lstAppSend = [];
    }
    AplicacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aplicacionService.getAplicacionMedium().then(function (lstAplicaciones) {
            _this.lstAplicaciones = lstAplicaciones;
            for (var _i = 0, lstAplicaciones_1 = lstAplicaciones; _i < lstAplicaciones_1.length; _i++) {
                var app = lstAplicaciones_1[_i];
                app.eliminar = false;
            }
            _this.gifAjax = true;
        });
        this.itemsMenu = [
            {
                label: 'Nuevo',
                icon: 'fa-file-o',
                command: function (event) { _this.showDialogToAdd(true); }
            },
            {
                label: 'Modificar',
                icon: 'fa-edit',
                command: function (event) { _this.showDialogToAdd(false); }
            },
            {
                label: 'Guardar',
                icon: 'fa-save',
                command: function (event) { _this.guardar(); }
            }
        ];
    };
    AplicacionComponent.prototype.guardar = function () {
        var _this = this;
        for (var _i = 0, _a = this.lstAplicaciones; _i < _a.length; _i++) {
            var app = _a[_i];
            if (app.send) {
                this.gifAjax = false;
                if (app.idAplicacion == null) {
                    this.lstAppSend.push(app);
                }
                else {
                    this.aplicacionService.updAplicacion(app)
                        .subscribe(function (res) {
                        _this.gifAjax = true;
                        _this.msg.push({ severity: "info", summary: 'Información', detail: "Operación realizada con éxito." });
                    });
                }
            }
        }
        if (this.lstAppSend.length > 0) {
            this.aplicacionService.addAllAplicacion(this.lstAppSend).subscribe(function (data) {
                console.log(data);
                for (var _i = 0, _a = JSON.parse(data); _i < _a.length; _i++) {
                    var app = _a[_i];
                    console.log("elemento ", app);
                }
                //this.app.idAplicacion = data.idAplicacion;
                _this.gifAjax = true;
                _this.msg.push({ severity: "info", summary: 'Información', detail: "Operación realizada con éxito." });
            });
        }
        this.displayDialog = false;
    };
    AplicacionComponent.prototype.aceptarEdicion = function () {
        this.app.send = true;
        if (this.newCar) {
            this.lstAplicaciones.push(this.app);
        }
        else {
            this.lstAplicaciones[this.findSelectedCarIndex()] = this.app;
        }
        //cerrar el dialogo
        this.cancelarEdicion();
    };
    AplicacionComponent.prototype.cancelarEdicion = function () {
        this.app = new PrimeAplicacion();
        this.displayDialog = false;
    };
    AplicacionComponent.prototype.delete = function () {
        this.lstAplicaciones.splice(this.findSelectedCarIndex(), 1);
        this.app = null;
        this.displayDialog = false;
    };
    AplicacionComponent.prototype.showDialogToAdd = function (nuevo) {
        this.newCar = nuevo;
        if (nuevo) {
            this.app = new PrimeAplicacion();
        }
        this.displayDialog = true;
    };
    AplicacionComponent.prototype.onRowSelect = function (event) {
        this.newCar = false;
        this.app = this.cloneAplicacion(event.data);
        this.app.fechaInicioProduccion = new Date(this.app.fechaInicioProduccion);
        console.log(this.app);
    };
    AplicacionComponent.prototype.cloneAplicacion = function (c) {
        var car = new PrimeAplicacion();
        for (var prop in c) {
            car[prop] = c[prop];
        }
        return car;
    };
    AplicacionComponent.prototype.findSelectedCarIndex = function () {
        return this.lstAplicaciones.indexOf(this.selectedApp);
    };
    return AplicacionComponent;
}());
AplicacionComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/angular2/componente/aplicacion/app.aplicacion.html',
        selector: 'my-app'
    }),
    __metadata("design:paramtypes", [aplicacionservice_1.AplicacionService, menuservice_1.MenuService])
], AplicacionComponent);
exports.AplicacionComponent = AplicacionComponent;
//# sourceMappingURL=app.aplicacion.js.map