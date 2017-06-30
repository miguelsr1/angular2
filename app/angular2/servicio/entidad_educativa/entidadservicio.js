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
var http_1 = require("@angular/http");
var EntidadService = (function () {
    function EntidadService(http) {
        this.http = http;
        this.urlAddAplicacion = 'http://192.168.22.133:8080/serviciosMined/';
    }
    EntidadService.prototype.getEntidadesMedium = function () {
        return this.http.get(this.urlAddAplicacion + 'findAllEntidades')
            .toPromise()
            .then(function (res) { return res.json().lstEntidades; })
            .then(function (data) { return data; });
    };
    EntidadService.prototype.getOrganizacionCeMedium = function (codigoEntidad) {
        return this.http.get(this.urlAddAplicacion + 'getPresidenteCe/' + codigoEntidad)
            .toPromise()
            .then(function (res) { return res.json().presidenteCe; })
            .then(function (data) { return data; });
    };
    EntidadService.prototype.getEstadisticaCensoMedium = function (codigoEntidad, idProcesoAdq) {
        return this.http.get(this.urlAddAplicacion + 'findEstadisticaCenso/' + codigoEntidad + '/' + idProcesoAdq)
            .toPromise()
            .then(function (res) { return res.json().lstEstadisticaCenso; })
            .then(function (data) { return data; });
    };
    return EntidadService;
}());
EntidadService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EntidadService);
exports.EntidadService = EntidadService;
//# sourceMappingURL=entidadservicio.js.map