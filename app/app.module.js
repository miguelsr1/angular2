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
var common_1 = require("@angular/common");
var common_2 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var app_component_1 = require("./app.component");
var app_aplicacion_1 = require("./angular2/componente/aplicacion/app.aplicacion");
var app_grupo_1 = require("./angular2/componente/grupo/app.grupo");
var app_estadisticas_1 = require("./angular2/componente/ejecucion/estadisticas/app.estadisticas");
var aplicacionservice_1 = require("./angular2/servicio/aplicacion/aplicacionservice");
var entidadservicio_1 = require("./angular2/servicio/entidad_educativa/entidadservicio");
var menuservice_1 = require("./angular2/servicio/menu/menuservice");
var usuarioservice_1 = require("./angular2/servicio/usuario/usuarioservice");
var app_routing_1 = require("./app.routing");
var primeng_1 = require("primeng/primeng");
/*const appRoutes: Routes = [
    { path: './angular2/componente/aplicacion/app.aplicacion', component: AppComponent}
];*/
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, router_1.RouterModule.forRoot([]), app_routing_1.routing,
            primeng_1.AutoCompleteModule, primeng_1.GalleriaModule, platform_browser_1.BrowserModule, primeng_1.PanelMenuModule, forms_1.FormsModule, http_1.HttpModule, primeng_1.PanelModule, primeng_1.MenubarModule, primeng_1.InputTextModule, primeng_1.PasswordModule, primeng_1.DataTableModule, primeng_1.ButtonModule, primeng_1.DialogModule, primeng_1.DropdownModule, primeng_1.CalendarModule, primeng_1.GrowlModule, primeng_1.CheckboxModule
        ],
        declarations: [app_component_1.AppComponent, app_aplicacion_1.AplicacionComponent, app_grupo_1.GrupoComponent, app_estadisticas_1.EstadisticaComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [aplicacionservice_1.AplicacionService, menuservice_1.MenuService, usuarioservice_1.UsuarioService, entidadservicio_1.EntidadService, { provide: common_2.APP_BASE_HREF, useValue: '/' }, app_routing_1.appRoutingProviders]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map