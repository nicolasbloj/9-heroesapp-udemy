import { HeroesService } from '../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  constructor(private _heroesService: HeroesService) { }

  ngOnInit() {
  }

  guardar(): void {
    console.log('heroe ', this.heroe);
    this._heroesService.nuevoHeroe(this.heroe).subscribe(data => console.log('data ', data));
  }

}
