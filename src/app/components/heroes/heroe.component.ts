import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';
import { NgForm } from "@angular/forms/src/forms";

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

  nuevo = false;
  id: string;

  constructor(private _heroesService: HeroesService, private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(parametros => {

      this.id = parametros['id'];
      if (this.id !== 'nuevo') {
        this._heroesService.getHeroe(this.id).subscribe(data => this.heroe = data);
      }
    });
  }

  ngOnInit() {



  }

  guardar(): void {


    console.log('heroe ', this.heroe);

    if (this.id === 'nuevo') {
      this._heroesService.nuevoHeroe(this.heroe).subscribe(
        data => {
          console.log('data ', data);
          this._router.navigate(['/heroe', data.name]);
        },
        error => console.error(error)
      );
    } else {
      this._heroesService.actualizarHeroe(this.heroe, this.id).subscribe(
        data => {
          console.log('data ', data);
        },
        error => console.error(error)
      );
    }


  }

  agregarNuevo(form: NgForm) {
    this._router.navigate(['/heroe', 'nuevo']);
    form.reset({ casa: 'Marvel' });
  }
}
