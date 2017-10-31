import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false // tiene que estar pendiente del ciclo de cambios de angular , 
              // ejemplo cuando eliminamos un objeto de value
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any[] {
    const keys: any = [];

    // tslint:disable-next-line:forin
    for (const key in value) {
      keys.push(key);
    }

    return keys;
  }

}
