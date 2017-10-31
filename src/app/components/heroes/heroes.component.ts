import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  // heroes: Heroe[] = [];

  heroes: any;

  constructor(private _heroesService: HeroesService) { }

  ngOnInit() {
    this._heroesService.listHeroes().subscribe(data => {
      console.log(data);

      // tslint:disable-next-line:forin
      /* for (const key$ in data) {
        console.log(data[key$]);
        const h = data[key$];
        h.key$ = key$;
        this.heroes.push(h);
      }*/

      this.heroes = data;
      console.log(this.heroes);

    });
  }

  eliminarHeroe(key$: string): void {

    this._heroesService.eliminarHeroe(key$).subscribe(data => {

      // si la respuesta es null entonces se elimino correctamente
      if (data) {
        console.log(data);
      } else {

        // java script puro
        delete this.heroes[key$];
        // heroes no es un array, es un objeto de objetos.

      }
    });
  }

}
