import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Candidat } from '../Models/candidat';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  providers: [ListCandidatsService],
})
export class ListeComponent implements OnInit {
  listCandidats: Candidat[] = [];
  @Output() msgToCv = new EventEmitter();
  constructor(private candSer: ListCandidatsService) {}

  ngOnInit(): void {
    this.listCandidats = this.candSer.getAllCandidats();
  }

  TraitementDeListe(cand) {
    this.msgToCv.emit(cand);
  }

  showCandidats() {
    console.log(this.candSer.getAllCandidats());
  }
}
