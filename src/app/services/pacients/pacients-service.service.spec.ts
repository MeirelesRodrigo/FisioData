import { TestBed } from '@angular/core/testing';

import { PacientsServiceService } from './pacients-service.service';

describe('PacientsServiceService', () => {
  let service: PacientsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacientsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
