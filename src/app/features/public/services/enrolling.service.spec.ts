import { TestBed } from '@angular/core/testing';

import { EnrollingService } from './enrolling.service';

describe('EnrollingService', () => {
  let service: EnrollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
