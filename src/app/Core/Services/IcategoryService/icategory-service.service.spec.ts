import { TestBed } from '@angular/core/testing';

import { ICategoryServiceService } from './icategory-service.service';

describe('ICategoryServiceService', () => {
  let service: ICategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ICategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
