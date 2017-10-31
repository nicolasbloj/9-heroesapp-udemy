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

  constructor() { }

  ngOnInit() {
  }

  guardar(): void {
    console.log('heroe', this.heroe);
  }

}
