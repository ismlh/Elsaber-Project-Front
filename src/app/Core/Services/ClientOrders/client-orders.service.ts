import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../BL/Environments/Ienvironment';
import { IclientOrder } from '../../../BL/Models/iclient-order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientOrdersService {
  constructor(private _httpClient: HttpClient) {}

  GetAll() {
    return this._httpClient.get<any[]>(
      `${environment.connectionString}api/ClientOrders`
    );
  }

  GetRandomData(): Observable<IclientOrder[]> {
    return this._httpClient.get<IclientOrder[]>(
      `${environment.connectionString}api//ClientOrders/GetRandomData`
    );
  }

  GetById(id: number) {
    return this._httpClient.get<any>(
      `${environment.connectionString}api/ClientOrders/${id}`
    );
  }
  Add(data: IclientOrder): Observable<IclientOrder> {
    return this._httpClient.post<IclientOrder>(
      `${environment.connectionString}api/ClientOrders`,
      data
    );
  }
  Update(data: IclientOrder, id: number): Observable<IclientOrder> {
    return this._httpClient.put<IclientOrder>(
      `${environment.connectionString}api/ClientOrders/${id}`,
      data
    );
  }
  Delete(id: number): Observable<IclientOrder> {
    return this._httpClient.delete<IclientOrder>(
      `${environment.connectionString}api/ClientOrders/${id}`
    );
  }
}
