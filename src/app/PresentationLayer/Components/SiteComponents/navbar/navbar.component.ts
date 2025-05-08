import { Component, OnInit } from '@angular/core';
import { Icompany } from '../../../../BL/Models/icompany';
import { IcompanyServiceService } from '../../../../Core/Services/ICompanyService/icompany-service.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { ILoginRes } from '../../../../BL/Models/ilogin';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  company: Icompany = {} as Icompany;
  IsDashboardLink: boolean = false;

  constructor(private _companyServe: IcompanyServiceService) {}
  ngOnInit(): void {
    this.GetCompanyData();
    this.IsDashboardLink = this.showDashboard();
  }
  GetCompanyData() {
    this._companyServe.GetAll().subscribe({
      next: (res) => {
        this.company = res[0];
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  showDashboard(): boolean {
    const authData = sessionStorage.getItem('IsAuthenticated');
    if (authData == null) return false;
    else {
      const isAuthanticated = JSON.parse(authData) as ILoginRes;
      const expirationDate = new Date(isAuthanticated.expiredDate);
      const now = new Date();

      if (isAuthanticated.isToken != true || expirationDate <= now) {
        return false;
      }
    }
    return true;
  }
}
