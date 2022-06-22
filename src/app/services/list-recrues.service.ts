import { Injectable } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListRecruesService {
  tabRecrues: Candidat[] = [];
  constructor() {}

  addRecrue(newR) {
    if (this.tabRecrues.indexOf(newR) != -1) {
      alert('Ce candidat a déjà été recruté');
    } else {
      this.tabRecrues.push(newR);
    }
  }
}
