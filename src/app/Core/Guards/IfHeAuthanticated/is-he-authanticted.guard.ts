import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ILoginRes } from '../../../BL/Models/ilogin';

export const isHeAuthantictedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authData = sessionStorage.getItem('IsAuthenticated');
  if (authData == null) router.navigate(['/Login']);
  else {
    const isAuthanticated = JSON.parse(authData) as ILoginRes;
    const expirationDate = new Date(isAuthanticated.expiredDate);
    const now = new Date();

    if (isAuthanticated.isToken != true || expirationDate <= now) {
      router.navigate(['/Login']);
    }
  }
  return true;
};
