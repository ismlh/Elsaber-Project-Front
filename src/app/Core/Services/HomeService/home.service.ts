import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icompany } from '../../../BL/Models/icompany';
import { environment } from '../../../BL/Environments/Ienvironment';
import { Iservice } from '../../../BL/Models/iservice';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _httpClient: HttpClient) {}

  GetCompanyData(): Observable<Icompany> {
    return this._httpClient.get<Icompany>(
      `${environment.connectionString}api/GetCompanyData`
    );
  }
  GetServices(): Observable<Iservice[]> {
    return this._httpClient.get<Iservice[]>(
      `${environment.connectionString}api/GetServices`
    );
  }
  GetArabicCountries(): any {
    var countries = [
      { name: 'مصر' },
      { name: 'السعودية' },
      { name: 'الأردن' },
      { name: 'العراق' },
      { name: 'فلسطين' },
      { name: 'الكويت' },
      { name: 'الإمارات' },
      { name: 'البحرين' },
      { name: 'عمان' },
      { name: 'قطر' },
      { name: 'لبنان' },
      { name: 'سوريا' },
      { name: 'اليمن' },
      { name: 'المغرب' },
      { name: 'الجزائر' },
      { name: 'تونس' },
      { name: 'ليبيا' },
      { name: 'السودان' },
      { name: 'موريتانيا' },
      { name: 'الصومال' },
    ];
    return countries;
  }
}
