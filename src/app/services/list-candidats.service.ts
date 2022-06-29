import { Injectable } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private tabCandidats: Candidat[] = [
    new Candidat(1, 'nidhal', 'jelassi', 36, 'Enseignant', 'nidhal.jpg'),
    new Candidat(2, 'bart', 'simpson', 15, 'Ingénieur', 'bart.jpeg'),
    new Candidat(3, 'homer', 'simpson', 76, 'Secrétaire', 'homer.jpg'),
  ];

  getAllCandidats() {
    return this.tabCandidats;
  }
  constructor() {}

  addCandidat(newC) {
    newC._id = this.tabCandidats[this.tabCandidats.length - 1]._id + 1;
    this.tabCandidats.push(newC);
  }

  updateCandidat(uCand) {
    let i = this.tabCandidats.indexOf(uCand);
    this.tabCandidats[i] = uCand;
  }

  getCandidatById(id) {
    return this.tabCandidats.find((c) => c._id == id);
  }

  deleteCandidat(cand) {
    let i = this.tabCandidats.indexOf(cand);
    this.tabCandidats.splice(i, 1);
  }
}
