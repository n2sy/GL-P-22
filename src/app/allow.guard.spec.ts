import { TestBed } from '@angular/core/testing';

import { AllowGuard } from './allow.guard';

describe('AllowGuard', () => {
  let guard: AllowGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllowGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
