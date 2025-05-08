import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icompany } from '../../../BL/Models/icompany';
import { environment } from '../../../BL/Environments/Ienvironment';

@Injectable({
  providedIn: 'root',
})
export class IcompanyServiceService {
  constructor(private _httpClient: HttpClient) {}

  GetAll(): Observable<Icompany[]> {
    return this._httpClient.get<Icompany[]>(
      `${environment.connectionString}api/Companies`
    );
  }
  GetById(id: number): Observable<Icompany> {
    return this._httpClient.get<Icompany>(
      `${environment.connectionString}api/Companies/${id}`
    );
  }

  AddCompanyData(company: Icompany, file: File | null): Observable<Icompany> {
    const formData = new FormData();
    formData.append('name', company.name);
    formData.append('description', company.description);
    formData.append('phone', company.phone);
    formData.append('title', company.title);
    formData.append('facebookUrl', company.facebookUrl);
    formData.append('twitterUrl', company.twitterUrl);
    formData.append('instgramUrl', company.instgramUrl);
    formData.append('youtubeUrl', company.youtubeUrl);
    formData.append('gmail', company.gmail);
    if (file) {
      formData.append('logoUrl', file); // Append the file object
    }
    return this._httpClient.post<Icompany>(
      `${environment.connectionString}api/Companies`,
      formData
    );
  }

  EditCompanyData(company: Icompany, file: File | null): Observable<Icompany> {
    const formData = new FormData();
    formData.append('name', company.name);
    formData.append('description', company.description);
    formData.append('phone', company.phone);
    formData.append('title', company.title);
    formData.append('facebookUrl', company.facebookUrl);
    formData.append('twitterUrl', company.twitterUrl);
    formData.append('instgramUrl', company.instgramUrl);
    formData.append('youtubeUrl', company.youtubeUrl);
    formData.append('gmail', company.gmail);

    if (file) {
      formData.append('logoUrl', file); // Append the file object
    }
    return this._httpClient.put<Icompany>(
      `${environment.connectionString}api/Companies/${company.id}`,
      formData
    );
  }

  Delete(id: number): Observable<Icompany> {
    return this._httpClient.delete<Icompany>(
      `${environment.connectionString}api/Companies/${id}`
    );
  }
}
