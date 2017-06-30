// Importar componentes y módulos para el routing 
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { AplicacionComponent } from './angular2/componente/aplicacion/app.aplicacion';
import { GrupoComponent } from './angular2/componente/grupo/app.grupo';
import { EstadisticaComponent } from './angular2/componente/ejecucion/estadisticas/app.estadisticas';

// Configuración de las rutas
const appRoutes: Routes = [
    { path: 'estadisticas', component: EstadisticaComponent },
    { path: 'aplicaciones', component: AplicacionComponent },
    { path: 'grupos', component: GrupoComponent },
];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);