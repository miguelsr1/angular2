import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Aplicacion} from '../../modelo/aplicacion/aplicacion';
import {Grupo} from '../../modelo/grupo/grupo';

import 'rxjs/add/operator/map';

@Injectable()
export class AplicacionService {
    private urlAddAplicacion: string;

    constructor(private http: Http) {
        this.urlAddAplicacion = 'http://192.168.22.133:8080/serviciosMined/';
    }

    getAplicacionMedium() {
        return this.http.get(this.urlAddAplicacion + 'findAllAplicaciones')
            .toPromise()
            .then(res => <Aplicacion[]> res.json().lstAplicaciones)
            .then(data => {return data;});
    }

    getGrupoMedium() {
        return this.http.get(this.urlAddAplicacion + 'findAllGrupos')
            .toPromise()
            .then(res => <Grupo[]> res.json().lstGrupos)
            .then(data => {return data;});
    }

    addAplicacion(app: Aplicacion) {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.urlAddAplicacion + 'addAplicacion', JSON.stringify(app), {headers})
            .map(res => res.json());
    }
    
    addAllAplicacion(lstApp: Aplicacion[]) {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.urlAddAplicacion + 'addAllAplicacion', JSON.stringify(lstApp), {headers})
            .map(res => res.json());
    }

    updAplicacion(app: Aplicacion) {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put(this.urlAddAplicacion + 'updAplicacion', JSON.stringify(app), {headers});
    }
}
