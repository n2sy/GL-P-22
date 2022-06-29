import { TestBed } from '@angular/core/testing';

import { ListServersService } from './list-servers.service';

describe('ListServersService', () => {
  let service: ListServersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListServersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
