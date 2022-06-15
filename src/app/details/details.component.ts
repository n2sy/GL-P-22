import { Component, Input, OnInit } from '@angular/core';
import { Candidat } from '../Models/candidat';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() candSelected: Candidat;
  constructor() {}

  ngOnInit(): void {}
}
