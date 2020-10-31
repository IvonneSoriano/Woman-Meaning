import { TestBed } from '@angular/core/testing';

import { CalculatePointService } from './calculate-point.service';

describe('CalculatePointService', () => {
  let service: CalculatePointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatePointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
