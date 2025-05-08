import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { notAddMoreThanCompanyGuard } from './not-add-more-than-company.guard';

describe('notAddMoreThanCompanyGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notAddMoreThanCompanyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
