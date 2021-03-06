import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  myId;
  selectedCand;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private listSer: ListCandidatsService
  ) {}

  ngOnInit(): void {
    // V1 avec params
    // this.activatedRoute.params.subscribe({
    //   next: (p: Params) => {
    //     this.myId = p['id'];
    //   },
    //   // error : () => {

    //   // },
    //   // complete : () => {

    //   // }
    // });

    // V2 avec paramMap
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
        console.log(this.selectedCand);
      },
    });

    //V3 avec snapshot
    // this.myId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  deleteHandler() {
    if (confirm('Etes-vous sûr de vouloir supprimer ce candidat ? ')) {
      this.listSer.deleteCandidatAPI(this.selectedCand._id).subscribe({
        next: (response) => {
          alert('Candidat supprimé');
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
