import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  selectedCand;
  constructor(
    private activatedRoute: ActivatedRoute,
    private listSer: ListCandidatsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        //this.myId = p.get('id');
        this.listSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (response) => {
            this.selectedCand = response;
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });
  }

  updateHandler() {
    this.listSer.updateCandidatAPI(this.selectedCand).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
