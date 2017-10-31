import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Heroe } from '../interfaces/heroe.interface';

@Injectable()
export class HeroesService {

  heroesURL = 'https://heroesapp-f2da3.firebaseio.com/heroes.json';
  heroeURL = 'https://heroesapp-f2da3.firebaseio.com/heroes';

  constructor(private _http: Http) { }

  nuevoHeroe(heroe: Heroe): Observable<any> {
    const body = JSON.stringify(heroe);
    const headers_aux = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers: headers_aux });

    return this._http.post(this.heroesURL, body, options).map((res) => {
      console.log('res json ', res.json());
      return res.json();
    });

  }

  actualizarHeroe(heroe: Heroe, key$: string): Observable<any> {
    const body = JSON.stringify(heroe);
    const headers_aux = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers: headers_aux });

    const url = `${this.heroeURL}/${key$}.json`;
    return this._http.put(url, body, options).map((res) => {
      console.log('res json ', res.json());
      return res.json();
    });

  }

  getHeroe(key$: string): Observable<any> {
    const url = `${this.heroeURL}/${key$}.json`;
    return this._http.get(url).map(res => res.json());
  }

  listHeroes(): Observable<any> {
    const url = `${this.heroeURL}.json`;
    return this._http.get(url).map(res => res.json());
  }

  eliminarHeroe(key$: string): Observable<any> {
    const url = `${this.heroeURL}/${key$}.json`;
    return this._http.delete(url).map(res => res.json());
  }
}
