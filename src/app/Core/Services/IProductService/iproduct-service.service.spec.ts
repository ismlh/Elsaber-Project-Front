import { TestBed } from '@angular/core/testing';

import { IProductServiceService } from './iproduct-service.service';

describe('IProductServiceService', () => {
  let service: IProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
