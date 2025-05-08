import { TestBed } from '@angular/core/testing';

import { IKhedmaService } from './ikhedma.service';

describe('IKhedmaService', () => {
  let service: IKhedmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IKhedmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
