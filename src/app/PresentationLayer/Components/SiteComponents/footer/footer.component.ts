import { Component, HostListener, OnInit } from '@angular/core';
import { Icompany } from '../../../../BL/Models/icompany';
import { IcompanyServiceService } from '../../../../Core/Services/ICompanyService/icompany-service.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  windowSize = { width: 0, height: 0 };
  company: Icompany = {} as Icompany;
  year: number = new Date().getFullYear();
  constructor(private _companyService: IcompanyServiceService) {}
  ngOnInit(): void {
    this.getCompanyData();
    this.onResize();
  }

  getCompanyData() {
    this._companyService.GetAll().subscribe({
      next: (data) => {
        this.company = data[0];
      },
      error: (error) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
  @HostListener('window:resize')
  onResize() {
    this.windowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  openWhatsapp() {
    window.open('https://wa.me/' + this.company.phone);
  }
}
