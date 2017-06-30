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
require("rxjs/add/operator/map");
var AplicacionService = (function () {
    function AplicacionService(http) {
        this.http = http;
        this.urlAddAplicacion = 'http://192.168.22.133:8080/serviciosMined/';
    }
    AplicacionService.prototype.getAplicacionMedium = function () {
        return this.http.get(this.urlAddAplicacion + 'findAllAplicaciones')
            .toPromise()
            .then(function (res) { return res.json().lstAplicaciones; })
            .then(function (data) { return data; });
    };
    AplicacionService.prototype.getGrupoMedium = function () {
        return this.http.get(this.urlAddAplicacion + 'findAllGrupos')
            .toPromise()
            .then(function (res) { return res.json().lstGrupos; })
            .then(function (data) { return data; });
    };
    AplicacionService.prototype.addAplicacion = function (app) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.urlAddAplicacion + 'addAplicacion', JSON.stringify(app), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AplicacionService.prototype.addAllAplicacion = function (lstApp) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.urlAddAplicacion + 'addAllAplicacion', JSON.stringify(lstApp), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AplicacionService.prototype.updAplicacion = function (app) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.put(this.urlAddAplicacion + 'updAplicacion', JSON.stringify(app), { headers: headers });
    };
    return AplicacionService;
}());
AplicacionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AplicacionService);
exports.AplicacionService = AplicacionService;
//# sourceMappingURL=aplicacionservice.js.map