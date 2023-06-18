import { TestBed } from '@angular/core/testing';

import { UserstableService } from './userstable.service';

describe('UserstableService', () => {
  let service: UserstableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserstableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
