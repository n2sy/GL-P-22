import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() oneCandidat: Candidat;
  @Output() msgToList = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendCandidatToList() {
    this.msgToList.emit(this.oneCandidat);
  }
}
