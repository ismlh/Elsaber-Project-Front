import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iquestion } from '../../../BL/Models/Iquestion';
import { environment } from '../../../BL/Environments/Ienvironment';

@Injectable({
  providedIn: 'root',
})
export class IQuestionService {
  constructor(private _httpClient: HttpClient) {}

  getAllQuestions(): Observable<Iquestion[]> {
    return this._httpClient.get<Iquestion[]>(
      `${environment.connectionString}api/Questions`
    );
  }
  getQuestionById(id: number): Observable<Iquestion> {
    return this._httpClient.get<Iquestion>(
      `${environment.connectionString}api/Questions/${id}`
    );
  }
  addQuestion(question: Iquestion): Observable<Iquestion> {
    return this._httpClient.post<Iquestion>(
      `${environment.connectionString}api/Questions`,
      question
    );
  }
  updateQuestion(question: Iquestion, id: number): Observable<Iquestion> {
    return this._httpClient.put<Iquestion>(
      `${environment.connectionString}api/Questions/${id}`,
      question
    );
  }
  deleteQuestion(id: number): Observable<Iquestion> {
    return this._httpClient.delete<Iquestion>(
      `${environment.connectionString}api/Questions/${id}`
    );
  }
}
