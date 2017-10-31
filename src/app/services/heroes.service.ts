import { Observable } from 'rxjs/Rx';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable()
export class HeroesService {

  heroesURL = 'https://heroesapp-f2da3.firebaseio.com/heroes.json';

  constructor(private _http: Http) { }

  nuevoHeroe(heroe: Heroe): Observable<Response> {
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
}
