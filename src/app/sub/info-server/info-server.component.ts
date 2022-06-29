import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListServersService } from '../list-servers.service';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.component.html',
  styleUrls: ['./info-server.component.css'],
})
export class InfoServerComponent implements OnInit {
  selectedServer;
  showButton = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private listSer: ListServersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        this.selectedServer = this.listSer.getServerById(p.get('id'));
      },
    });

    this.activatedRoute.queryParamMap.subscribe({
      next: (q) => {
        this.showButton = q.get('allow') == '0' ? true : false;
      },
    });
  }
}
