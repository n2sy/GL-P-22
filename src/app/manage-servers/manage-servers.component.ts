import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent implements OnInit {
  listServers = [
    {
      nom: 'Production Server',
      type: 'small',
      statut: 'stable',
      date_d: new Date(2020, 3, 14),
    },
    {
      nom: 'Development Server',
      type: 'large',
      statut: 'stable',
      date_d: new Date(2020, 3, 14),
    },
    {
      nom: 'Test Development Server',
      type: 'small',
      statut: 'stable',
      date_d: new Date(2020, 3, 14),
    },
    {
      nom: 'Nidhal Server',
      type: 'large',
      statut: 'stable',
      date_d: new Date(2020, 3, 14),
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable' ? true : false,
      'list-group-item-danger': st == 'critical' ? true : false,
      'list-group-item-warning': st == 'offline' ? true : false,
    };
  }
}
