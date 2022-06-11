import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  cours: string = "Cours d'Angular";
  nom = 'Nidhal';
  color = 'pink';
  hd = false;
  constructor() {}

  ngOnInit(): void {}

  traitement() {
    //alert('Click détecté');
    this.hd = !this.hd;
  }

  traitementDuParent(msg) {
    alert(msg);
  }
}
