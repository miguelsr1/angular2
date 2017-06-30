"use strict";
// Importar componentes y módulos para el routing 
var router_1 = require("@angular/router");
// Componentes
var app_aplicacion_1 = require("./angular2/componente/aplicacion/app.aplicacion");
var app_grupo_1 = require("./angular2/componente/grupo/app.grupo");
var app_estadisticas_1 = require("./angular2/componente/ejecucion/estadisticas/app.estadisticas");
// Configuración de las rutas
var appRoutes = [
    { path: 'estadisticas', component: app_estadisticas_1.EstadisticaComponent },
    { path: 'aplicaciones', component: app_aplicacion_1.AplicacionComponent },
    { path: 'grupos', component: app_grupo_1.GrupoComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map