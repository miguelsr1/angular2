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
require("rxjs/add/operator/catch");
var PrimeGrupo = (function () {
    function PrimeGrupo(idGrupo, nombreGrupo) {
        this.idGrupo = idGrupo;
        this.nombreGrupo = nombreGrupo;
    }
    return PrimeGrupo;
}());
var GrupoComponent = (function () {
    function GrupoComponent(aplicacionService) {
        this.aplicacionService = aplicacionService;
        this.grupo = new PrimeGrupo();
    }
    GrupoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aplicacionService.getGrupoMedium().then(function (lstGrupos) { return _this.lstGrupos = lstGrupos; });
        this.menuBarra = [
            { label: 'Nuevo', icon: 'fa-file-o' },
            { label: 'Modificar', icon: 'fa-edit' },
            {
                label: 'Guardar', icon: 'fa-save', command: function (event) { _this.save(); }
            }
        ];
    };
    GrupoComponent.prototype.showDialogToAdd = function () {
        this.newGrupo = true;
        this.grupo = new PrimeGrupo();
        this.displayDialog = true;
    };
    GrupoComponent.prototype.save = function () {
        if (this.newGrupo) {
            //this.aplicacionService.addAplicacion(this.grupo);
            this.lstGrupos.push(this.grupo);
        }
        else {
            //this.aplicacionService.updAplicacion(this.grupo);
            this.lstGrupos[this.findSelectedCarIndex()] = this.grupo;
        }
        this.grupo = new PrimeGrupo();
        this.displayDialog = false;
    };
    GrupoComponent.prototype.delete = function () {
        this.lstGrupos.splice(this.findSelectedCarIndex(), 1);
        this.grupo = null;
        this.displayDialog = false;
    };
    GrupoComponent.prototype.onRowSelect = function (event) {
        this.newGrupo = false;
        this.grupo = this.cloneAplicacion(event.data);
        //this.displayDialog = true;
    };
    GrupoComponent.prototype.cloneAplicacion = function (c) {
        var car = new PrimeGrupo();
        for (var prop in c) {
            car[prop] = c[prop];
        }
        return car;
    };
    GrupoComponent.prototype.findSelectedCarIndex = function () {
        return this.lstGrupos.indexOf(this.selectedGrupo);
    };
    return GrupoComponent;
}());
GrupoComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/angular2/componente/grupo/app.grupo.html',
        selector: 'my-app'
    }),
    __metadata("design:paramtypes", [aplicacionservice_1.AplicacionService])
], GrupoComponent);
exports.GrupoComponent = GrupoComponent;
//# sourceMappingURL=app.grupo.js.map