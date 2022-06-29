import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListServersService } from '../list-servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  editedServer;
  constructor(
    private activatedRoute: ActivatedRoute,
    private listSer: ListServersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        this.editedServer = this.listSer.getServerById(p.get('id'));
      },
    });
  }
}
