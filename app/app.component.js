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
var usuarioservice_1 = require("./angular2/servicio/usuario/usuarioservice");
var AppComponent = (function () {
    function AppComponent(usuarioService) {
        this.usuarioService = usuarioService;
        //console.log("ok 3 :" + this.stringMenu);
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.menuService.getMenuMedium().then(stringMenu => this.stringMenu = stringMenu);
        //this.lstMenu = this.menuService.getMenuMedium()
        this.lstMenu = [{ "label": "Paquete Escolar", "items": [{ "label": "Ejecución", "items": [{ "label": "Estadistica Censo", "routerLink": ['/estadisticas'], "expanded": false, "disabled": false }, { "label": "Oferta de Bienes y/o Servicios", "url": "/app/ejecucion/regOferta.mined", "expanded": false, "disabled": false }, { "label": "Detalle Oferta", "url": "/app/ejecucion/regDetalleOferta.mined", "expanded": false, "disabled": false }, { "label": "Reserva de Fondos", "url": "/app/ejecucion/regReservaFondos.mined", "expanded": false, "disabled": false }, { "label": "Generación de Contratos", "url": "/app/ejecucion/regContrato.mined", "expanded": false, "disabled": false }], "expanded": true, "disabled": false }, { "label": "Control", "routerLink": ['/grupos'], "expanded": false, "disabled": false }, { "label": "Seguimiento", "routerLink": ['/aplicaciones'], "expanded": false, "disabled": false }], "expanded": true, "disabled": false }];
    };
    AppComponent.prototype.valudarUSuario = function () {
        this.usuarioService.post().subscribe(function (result) { console.log(result); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/angular2/inicial.html',
    }),
    __metadata("design:paramtypes", [usuarioservice_1.UsuarioService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map