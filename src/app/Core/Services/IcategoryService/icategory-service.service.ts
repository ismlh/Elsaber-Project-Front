import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoryToRead } from '../../../BL/Models/icategory';
import { ICategoryToWrite } from '../../../BL/Models/icategory';
import { environment } from '../../../BL/Environments/Ienvironment';

@Injectable({
  providedIn: 'root',
})
export class ICategoryServiceService {
  constructor(private _httpClient: HttpClient) {}

  // Get all categories from the API
  GetAll(): Observable<ICategoryToRead[]> {
    return this._httpClient.get<ICategoryToRead[]>(
      `${environment.connectionString}api/Categories`
    );
  }

  // Get a category by ID from the API
  GetById(id: number): Observable<ICategoryToRead> {
    return this._httpClient.get<ICategoryToRead>(
      `${environment.connectionString}api/Categories/${id}`
    );
  }
  // Add a new category to the API
  Add(category: ICategoryToWrite): Observable<ICategoryToWrite> {
    return this._httpClient.post<ICategoryToWrite>(
      `${environment.connectionString}api/Categories`,
      category
    );
  }

  // Edit an existing category in the API
  Edit(id: number, category: ICategoryToWrite): Observable<ICategoryToWrite> {
    return this._httpClient.put<ICategoryToWrite>(
      `${environment.connectionString}api/Categories/${id}`,
      category
    );
  }
  // Delete a category from the API
  Delete(id: number): Observable<ICategoryToWrite> {
    return this._httpClient.delete<ICategoryToWrite>(
      `${environment.connectionString}api/Categories/${id}`
    );
  }
}
