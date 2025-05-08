import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isHeAuthantictedGuard } from './is-he-authanticted.guard';

describe('isHeAuthantictedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isHeAuthantictedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
