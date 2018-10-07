import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'tolowercase'})
export class ToLowerCasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase();
  }
}