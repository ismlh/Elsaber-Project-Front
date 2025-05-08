import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginDto, ILoginRes } from '../../../BL/Models/ilogin';
import { Observable } from 'rxjs';
import { environment } from '../../../BL/Environments/Ienvironment';

@Injectable({
  providedIn: 'root',
})
export class ILoginService {
  constructor(private _httpClient: HttpClient) {}

  Login(loginObj: ILoginDto): Observable<ILoginRes> {
    return this._httpClient.post<ILoginRes>(
      `${environment.connectionString}api/Account/Login`,
      loginObj
    );
  }
}
