import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { IcompanyServiceService } from '../../Services/ICompanyService/icompany-service.service';

@Injectable({
  providedIn: 'root',
})
export class notAddMoreThanCompanyGuard implements CanActivate {
  constructor(
    private companyService: IcompanyServiceService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.companyService.GetAll().pipe(
      take(1), // Ensure the observable completes after one emission
      map((res) => {
        if (res.length > 0) {
          alert(
            'يـــمــكــنــك تــعــديــل الشــركــة الــواحــدة الــمــســجــلــة فــقــط'
          );
          this.router.navigate(['Dashboard/CompanyIndex']);

          return false;
        }
        return true;
      })
    );
  }
}
