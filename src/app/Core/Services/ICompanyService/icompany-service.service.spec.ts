import { TestBed } from '@angular/core/testing';

import { IcompanyServiceService } from './icompany-service.service';

describe('IcompanyServiceService', () => {
  let service: IcompanyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcompanyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
