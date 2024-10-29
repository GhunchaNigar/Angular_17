import { TestBed } from '@angular/core/testing';

import { NumlistService } from './numlist.service';

describe('NumlistService', () => {
  let service: NumlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
