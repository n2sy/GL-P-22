import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() listCandidats: Candidat[] = [];
  @Output() msgToCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  TraitementDeListe(cand) {
    this.msgToCv.emit(cand);
  }
}
