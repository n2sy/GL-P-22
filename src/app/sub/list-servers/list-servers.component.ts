import { Component, OnInit } from '@angular/core';
import { ListServersService } from '../list-servers.service';

@Component({
  selector: 'app-list-servers',
  templateUrl: './list-servers.component.html',
  styleUrls: ['./list-servers.component.css'],
})
export class ListServersComponent implements OnInit {
  listServers = [];
  constructor(private listSer: ListServersService) {}

  ngOnInit(): void {
    this.listServers = this.listSer.tabServers;
  }
}
