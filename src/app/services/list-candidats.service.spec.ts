import { TestBed } from '@angular/core/testing';

import { ListCandidatsService } from './list-candidats.service';

describe('ListCandidatsService', () => {
  let service: ListCandidatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCandidatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
