import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
})
export class ShortPipe implements PipeTransform {
  transform(value: string, nbmax: number): string {
    if (value.length < nbmax) return value;
    else {
      return value.substring(0, nbmax) + '...';
    }
  }
}
