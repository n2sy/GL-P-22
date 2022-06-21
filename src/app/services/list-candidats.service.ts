import { Injectable } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private tabCandidats: Candidat[] = [
    new Candidat(1, 'nidhal', 'jelassi', 36, 'Enseignant', 'nidhal.jpg'),
    new Candidat(2, 'bart', 'simpson', 15, 'Ingénieur', 'bart.jpeg'),
    new Candidat(1, 'homer', 'simpson', 76, 'Secrétaire', 'homer.jpg'),
  ];

  getAllCandidats() {
    return this.tabCandidats;
  }
  constructor() {}

  addCandidat() {
    this.tabCandidats.push(
      new Candidat(1, 'NEW', 'CANDIDAT', 76, 'Secrétaire', 'homer.jpg')
    );
  }
}
