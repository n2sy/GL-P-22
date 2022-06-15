import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent implements OnInit {
  bgColor;
  cl;
  fSize;
  font;
  constructor() {}

  ngOnInit(): void {}

  changeSize(inp) {
    console.log(inp.value);
    this.fSize = inp.value + 'px';
  }
}
