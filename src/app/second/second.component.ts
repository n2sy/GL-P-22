import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  @Input() bgColor = 'yellow';
  @Output() msgToParent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendMsg() {
    this.msgToParent.emit('Message de la part de secondComponent');
  }
}
