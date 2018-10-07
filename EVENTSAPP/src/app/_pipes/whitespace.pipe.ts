import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'nowhitespace'})
export class NOwhiteSpacePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/ /g,'');
  }
}