import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  myId;
  constructor(private activatedRoute: ActivatedRoute) {}

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
        this.myId = p.get('id');
      },
    });

    //V3 avec snapshot
    // this.myId = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
