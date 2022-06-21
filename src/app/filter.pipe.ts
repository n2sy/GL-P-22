import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selStatut: string): any[] {
    if (selStatut.length == 0) return value;
    let newTab = [];
    for (const serv of value) {
      if (serv['statut'] == selStatut) newTab.push(serv);
    }
    return newTab;
  }
}
