import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserMessage } from '../../../BL/Models/iuser-message';
import { environment } from '../../../BL/Environments/Ienvironment';

@Injectable({
  providedIn: 'root',
})
export class IUsersMessagesServiceService {
  constructor(private _httpClient: HttpClient) {}

  GetAll(): Observable<IUserMessage[]> {
    return this._httpClient.get<IUserMessage[]>(
      `${environment.connectionString}api/Users`
    );
  }

  GetById(id: number): Observable<IUserMessage> {
    return this._httpClient.get<IUserMessage>(
      `${environment.connectionString}api/Users/${id}`
    );
  }

  Add(userMessage: IUserMessage): Observable<IUserMessage> {
    return this._httpClient.post<IUserMessage>(
      `${environment.connectionString}api/Users`,
      userMessage
    );
  }

  Update(userMessage: IUserMessage, id: number): Observable<IUserMessage> {
    return this._httpClient.put<IUserMessage>(
      `${environment.connectionString}api/Users/${id}`,
      userMessage
    );
  }

  Delete(id: number) {
    return this._httpClient.delete<IUserMessage>(
      `${environment.connectionString}api/Users/${id}`
    );
  }
}
