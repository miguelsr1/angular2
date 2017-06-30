import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { EntidadEducativa } from '../../modelo/entidadeducativa/entidadeducativa';
import { EstadisticaCenso } from '../../modelo/estadisticacenso/EstadisticaCenso';
import { OrganizacionEducativa } from '../../modelo/organizacioneducativa/OrganizacionEducativa';

@Injectable()
export class EntidadService {

    private urlAddAplicacion: string;

    constructor(private http: Http) {
        this.urlAddAplicacion = 'http://192.168.22.133:8080/serviciosMined/';
    }

    getEntidadesMedium() {
        return this.http.get(this.urlAddAplicacion + 'findAllEntidades')
            .toPromise()
            .then(res => <EntidadEducativa[]>res.json().lstEntidades)
            .then(data => { return data; });
    }

    getOrganizacionCeMedium(codigoEntidad: string) {
        return this.http.get(this.urlAddAplicacion + 'getPresidenteCe/' + codigoEntidad)
            .toPromise()
            .then(res => <OrganizacionEducativa[]>res.json().presidenteCe)
            .then(data => { return data; });
    }

    getEstadisticaCensoMedium(codigoEntidad: string, idProcesoAdq: number) {
        return this.http.get(this.urlAddAplicacion + 'findEstadisticaCenso/' + codigoEntidad + '/' + idProcesoAdq)
            .toPromise()
            .then(res => <EstadisticaCenso[]>res.json().lstEstadisticaCenso)
            .then(data => { return data });
    }
}