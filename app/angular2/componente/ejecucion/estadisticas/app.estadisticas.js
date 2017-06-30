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
var entidadservicio_1 = require("../../../servicio/entidad_educativa/entidadservicio");
var PrimeEntidad = (function () {
    function PrimeEntidad(codigoEntidad, nombre, direccion, telefono1, telefono2, fax, inicialesModalidad, codigoDepartamento, codigoMunicipio, codigoNombre) {
        this.codigoEntidad = codigoEntidad;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono1 = telefono1;
        this.telefono2 = telefono2;
        this.fax = fax;
        this.inicialesModalidad = inicialesModalidad;
        this.codigoDepartamento = codigoDepartamento;
        this.codigoMunicipio = codigoMunicipio;
        this.codigoNombre = codigoNombre;
    }
    return PrimeEntidad;
}());
var PrimeOrganizacion = (function () {
    function PrimeOrganizacion(idOrganizacionEducativa, codigoEntidad, nombreMiembro, telDirector) {
        this.idOrganizacionEducativa = idOrganizacionEducativa;
        this.codigoEntidad = codigoEntidad;
        this.nombreMiembro = nombreMiembro;
        this.telDirector = telDirector;
    }
    return PrimeOrganizacion;
}());
var PrimeEstadisticaCenso = (function () {
    function PrimeEstadisticaCenso() {
        this.masculino = 0;
        this.femenimo = 0;
    }
    return PrimeEstadisticaCenso;
}());
var EstadisticaComponent = (function () {
    function EstadisticaComponent(entidadService) {
        var _this = this;
        this.entidadService = entidadService;
        this.estadisticaPar = new PrimeEstadisticaCenso();
        this.estadisticaICiclo = new PrimeEstadisticaCenso();
        this.estadisticaIICiclo = new PrimeEstadisticaCenso();
        this.estadisticaIIICiclo = new PrimeEstadisticaCenso();
        this.estadisticaBar = new PrimeEstadisticaCenso();
        this.entidad = new PrimeEntidad();
        this.organizacion = new PrimeOrganizacion();
        this.itemsMenu = [
            {
                label: 'Nuevo',
                icon: 'fa-file-o'
            },
            {
                label: 'Modificar',
                icon: 'fa-edit'
            },
            {
                label: 'Guardar',
                icon: 'fa-save',
                command: function (event) { _this.guardar(); }
            }
        ];
    }
    EstadisticaComponent.prototype.guardar = function () {
    };
    EstadisticaComponent.prototype.valuechange = function (event) {
        var _this = this;
        if (event.length >= 5) {
            this.entidad = this.lstEntidades.find(function (item) { return item.codigoEntidad === event; });
            this.entidadService.getOrganizacionCeMedium(event).then(function (presidente) { return _this.organizacion = presidente; });
            this.entidadService.getEstadisticaCensoMedium(event, 9).then(function (lst) { return _this.lstEstadisticaCenso = lst; })
                .then(function (result) {
                _this.estadisticaPar = _this.lstEstadisticaCenso.find(function (item) { return item.idNivelEducativo === 1; });
                _this.estadisticaICiclo = _this.lstEstadisticaCenso.find(function (item) { return item.idNivelEducativo === 3; });
                _this.estadisticaIICiclo = _this.lstEstadisticaCenso.find(function (item) { return item.idNivelEducativo === 4; });
                _this.estadisticaIIICiclo = _this.lstEstadisticaCenso.find(function (item) { return item.idNivelEducativo === 5; });
                _this.estadisticaBar = _this.lstEstadisticaCenso.find(function (item) { return item.idNivelEducativo === 6; });
            });
        }
        else {
            this.entidad = new PrimeEntidad();
        }
    };
    EstadisticaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entidadService.getEntidadesMedium().then(function (lstEntidades) { return _this.lstEntidades = lstEntidades; });
    };
    //Parvularia
    EstadisticaComponent.prototype.getTotalUniPar = function () {
        return (this.estadisticaPar.femenimo * 8.5 * 2) + (this.estadisticaPar.masculino * 8.25 * 2);
    };
    EstadisticaComponent.prototype.getTotalUtiPar = function () {
        return (this.estadisticaPar.femenimo + this.estadisticaPar.masculino) * 7.4;
    };
    EstadisticaComponent.prototype.getTotalZapPar = function () {
        return (this.estadisticaPar.femenimo + this.estadisticaPar.masculino) * 14.60;
    };
    //I Ciclo
    EstadisticaComponent.prototype.getTotalUniICiclo = function () {
        return (this.estadisticaICiclo.femenimo * 9 * 2) + (this.estadisticaICiclo.masculino * 10.50 * 2);
    };
    EstadisticaComponent.prototype.getTotalUtiICiclo = function () {
        return (this.estadisticaICiclo.femenimo + this.estadisticaICiclo.masculino) * 6.75;
    };
    EstadisticaComponent.prototype.getTotalZapICiclo = function () {
        return (this.estadisticaICiclo.femenimo + this.estadisticaICiclo.masculino) * 14.60;
    };
    //II Ciclo
    EstadisticaComponent.prototype.getTotalUniIICiclo = function () {
        return (this.estadisticaIICiclo.femenimo * 9 * 2) + (this.estadisticaIICiclo.masculino * 10.50 * 2);
    };
    EstadisticaComponent.prototype.getTotalUtiIICiclo = function () {
        return (this.estadisticaIICiclo.femenimo + this.estadisticaIICiclo.masculino) * 7.25;
    };
    EstadisticaComponent.prototype.getTotalZapIICiclo = function () {
        return (this.estadisticaIICiclo.femenimo + this.estadisticaIICiclo.masculino) * 14.60;
    };
    //III Ciclo
    EstadisticaComponent.prototype.getTotalUniIIICiclo = function () {
        return (this.estadisticaIIICiclo.femenimo * 9 * 2) + (this.estadisticaIIICiclo.masculino * 10.50 * 2);
    };
    EstadisticaComponent.prototype.getTotalUtiIIICiclo = function () {
        return (this.estadisticaIIICiclo.femenimo + this.estadisticaIIICiclo.masculino) * 9;
    };
    EstadisticaComponent.prototype.getTotalZapIIICiclo = function () {
        return (this.estadisticaIIICiclo.femenimo + this.estadisticaIIICiclo.masculino) * 14.60;
    };
    //Bachillerato
    EstadisticaComponent.prototype.getTotalUniBar = function () {
        return (this.estadisticaBar.femenimo * 9 * 2) + (this.estadisticaBar.masculino * 10.50 * 2);
    };
    EstadisticaComponent.prototype.getTotalUtiBar = function () {
        return (this.estadisticaBar.femenimo + this.estadisticaBar.masculino) * 10;
    };
    EstadisticaComponent.prototype.getTotalZapBar = function () {
        return (this.estadisticaBar.femenimo + this.estadisticaBar.masculino) * 16;
    };
    //total de alumnos
    EstadisticaComponent.prototype.getTotalFem = function () {
        return this.estadisticaPar.femenimo + this.estadisticaICiclo.femenimo + this.estadisticaIICiclo.femenimo + this.estadisticaIIICiclo.femenimo + this.estadisticaBar.femenimo;
    };
    EstadisticaComponent.prototype.getTotalMas = function () {
        return this.estadisticaPar.masculino + this.estadisticaICiclo.masculino + this.estadisticaIICiclo.masculino + this.estadisticaIIICiclo.masculino + this.estadisticaBar.masculino;
    };
    EstadisticaComponent.prototype.getTotal = function () {
        return this.getTotalFem() + this.getTotalMas();
    };
    //totales de montos
    EstadisticaComponent.prototype.getTotalUni = function () {
        return this.getTotalUniPar() + this.getTotalUniICiclo() + this.getTotalUniIICiclo() + this.getTotalUniIIICiclo() + this.getTotalUniBar();
    };
    EstadisticaComponent.prototype.getTotalUti = function () {
        return this.getTotalUtiPar() + this.getTotalUtiICiclo() + this.getTotalUtiIICiclo() + this.getTotalUtiIIICiclo() + this.getTotalUtiBar();
    };
    EstadisticaComponent.prototype.getTotalZap = function () {
        return this.getTotalZapPar() + this.getTotalZapICiclo() + this.getTotalZapIICiclo() + this.getTotalZapIIICiclo() + this.getTotalZapBar();
    };
    return EstadisticaComponent;
}());
EstadisticaComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/angular2/componente/ejecucion/estadisticas/estadisticas.html',
        selector: 'my-app'
    }),
    __metadata("design:paramtypes", [entidadservicio_1.EntidadService])
], EstadisticaComponent);
exports.EstadisticaComponent = EstadisticaComponent;
//# sourceMappingURL=app.estadisticas.js.map