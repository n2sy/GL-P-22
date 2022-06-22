import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from '../Models/candidat';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() candSelected: Candidat;
  constructor(private recSer: ListRecruesService) {}

  ngOnInit(): void {}

  addNewRecrue() {
    this.recSer.addRecrue(this.candSelected);
  }
}
