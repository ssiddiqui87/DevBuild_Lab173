import { TestBed } from '@angular/core/testing';

import { CSHOFService } from './cshof.service';

describe('CSHOFService', () => {
  let service: CSHOFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CSHOFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
