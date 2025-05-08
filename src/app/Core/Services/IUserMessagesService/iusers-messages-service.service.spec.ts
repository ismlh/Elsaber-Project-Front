import { TestBed } from '@angular/core/testing';

import { IUsersMessagesServiceService } from './iusers-messages-service.service';

describe('IUsersMessagesServiceService', () => {
  let service: IUsersMessagesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IUsersMessagesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
