import { Component, OnInit } from '@angular/core';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-recrues',
  templateUrl: './recrues.component.html',
  styleUrls: ['./recrues.component.css'],
})
export class RecruesComponent implements OnInit {
  listRecrues = [];
  constructor(private recSer: ListRecruesService) {}

  ngOnInit(): void {
    this.listRecrues = this.recSer.tabRecrues;
  }
}
