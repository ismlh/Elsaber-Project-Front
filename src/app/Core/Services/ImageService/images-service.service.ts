import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../BL/Environments/Ienvironment';

@Injectable({
  providedIn: 'root',
})
export class ImagesServiceService {
  constructor(private _httpClient: HttpClient) {}

  Delete(id: number): Observable<any> {
    return this._httpClient.delete<any>(
      `${environment.connectionString}api/Images/${id}`
    );
  }
}
