import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AppComponent } from './app.component';
import { AplicacionComponent } from './angular2/componente/aplicacion/app.aplicacion';
import { GrupoComponent } from './angular2/componente/grupo/app.grupo';
import { EstadisticaComponent } from './angular2/componente/ejecucion/estadisticas/app.estadisticas';
import { AplicacionService } from './angular2/servicio/aplicacion/aplicacionservice';
import { EntidadService } from './angular2/servicio/entidad_educativa/entidadservicio';
import { MenuService } from './angular2/servicio/menu/menuservice';
import { UsuarioService } from './angular2/servicio/usuario/usuarioservice';

import { routing, appRoutingProviders } from './app.routing';
import { AutoCompleteModule, GalleriaModule, PanelModule, PanelMenuModule, MenubarModule, InputTextModule, PasswordModule, DataTableModule, ButtonModule, DialogModule, DropdownModule, CalendarModule, CheckboxModule, GrowlModule } from 'primeng/primeng';

/*const appRoutes: Routes = [
    { path: './angular2/componente/aplicacion/app.aplicacion', component: AppComponent}
];*/

@NgModule({
    imports: [
        CommonModule,RouterModule.forRoot([]),routing,
        AutoCompleteModule, GalleriaModule, BrowserModule, PanelMenuModule, FormsModule, HttpModule, PanelModule, MenubarModule, InputTextModule, PasswordModule, DataTableModule, ButtonModule, DialogModule, DropdownModule, CalendarModule, GrowlModule, CheckboxModule],
    declarations: [AppComponent,AplicacionComponent, GrupoComponent,EstadisticaComponent],
    bootstrap: [AppComponent],
    providers: [AplicacionService, MenuService, UsuarioService, EntidadService, { provide: APP_BASE_HREF, useValue: '/'}, appRoutingProviders]
})
export class AppModule { }
