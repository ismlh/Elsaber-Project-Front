import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iservice } from '../../../BL/Models/iservice';
import { environment } from '../../../BL/Environments/Ienvironment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IKhedmaService {
  constructor(private _httpclient: HttpClient) {}

  GetAll(): Observable<Iservice[]> {
    return this._httpclient.get<Iservice[]>(
      `${environment.connectionString}api/Serivces`
    );
  }

  GetById(id: number): Observable<Iservice> {
    return this._httpclient.get<Iservice>(
      `${environment.connectionString}api/Serivces/${id}`
    );
  }

  Add(service: Iservice, file: File | null): Observable<Iservice> {
    const formData = new FormData();
    formData.append('name', service.name);
    formData.append('description', service.description);
    if (file) {
      formData.append('imageUrl', file);
    }

    return this._httpclient.post<Iservice>(
      `${environment.connectionString}api/Serivces`,
      formData
    );
  }

  Edit(id: number, service: Iservice, file: File | null): Observable<Iservice> {
    const formData = new FormData();
    formData.append('name', service.name);
    formData.append('description', service.description);
    if (file) {
      formData.append('imageUrl', file);
    }

    return this._httpclient.put<Iservice>(
      `${environment.connectionString}api/Serivces/${id}`,
      formData
    );
  }

  Delete(id: number): Observable<Iservice> {
    return this._httpclient.delete<Iservice>(
      `${environment.connectionString}api/Serivces/${id}`
    );
  }
}
