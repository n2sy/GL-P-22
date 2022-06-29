import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private listSer: ListCandidatsService, private router: Router) {}

  ngOnInit(): void {}
  submitHandler(newCand) {
    console.log(newCand);
    this.listSer.addCandidat(newCand);
    this.router.navigateByUrl('/cv');
  }
}
