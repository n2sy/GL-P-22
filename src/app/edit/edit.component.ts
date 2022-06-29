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
        this.selectedCand = this.listSer.getCandidatById(p.get('id'));
      },
    });
  }

  updateHandler() {
    this.listSer.updateCandidat(this.selectedCand);
    this.router.navigateByUrl('/cv');
  }
}
