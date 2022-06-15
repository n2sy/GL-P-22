import { Component, OnInit } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  tabCandidats: Candidat[] = [
    new Candidat(1, 'nidhal', 'jelassi', 36, 'Enseignant', 'nidhal.jpg'),
    new Candidat(2, 'bart', 'simpson', 15, 'Ingénieur', 'bart.jpeg'),
    new Candidat(1, 'homer', 'simpson', 76, 'Secrétaire', 'homer.jpg'),
  ];
  selectedCandidat: Candidat;
  constructor() {}

  ngOnInit(): void {}

  traitementDuCv(cand) {
    this.selectedCandidat = cand;
    console.log(this.selectedCandidat);
  }
}
