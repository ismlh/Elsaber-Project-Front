import { HttpInterceptorFn } from '@angular/common/http';
import { ILoginRes } from '../../../BL/Models/ilogin';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authData = sessionStorage.getItem('IsAuthenticated');
  let isAuthanticated: ILoginRes = {} as ILoginRes;
  if (authData != null) {
    isAuthanticated = JSON.parse(authData) as ILoginRes;
  }

  // Clone the request and add the authorization header
  if (isAuthanticated.isToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${isAuthanticated.token}`,
      },
    });
  }

  return next(req);
};
