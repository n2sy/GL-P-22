import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable()
export class FirstService {
  constructor(private secondSer: SecondService) {}

  showMessage() {
    console.log('Je suis le First Service');
    this.secondSer.showInfos();
  }
}
