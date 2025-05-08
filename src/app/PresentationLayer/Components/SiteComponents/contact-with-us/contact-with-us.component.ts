import { Component, OnInit } from '@angular/core';
import { IcompanyServiceService } from '../../../../Core/Services/ICompanyService/icompany-service.service';
import { Icompany } from '../../../../BL/Models/icompany';

@Component({
  selector: 'app-contact-with-us',
  imports: [],
  templateUrl: './contact-with-us.component.html',
  styleUrl: './contact-with-us.component.css',
})
export class ContactWithUsComponent implements OnInit {
  comany: Icompany = {} as Icompany;
  constructor(private _companyService: IcompanyServiceService) {}

  ngOnInit(): void {
    this.GetCompanyInfo();
  }
  GetCompanyInfo() {
    this._companyService.GetAll().subscribe({
      next: (data) => {
        this.comany = data[0];
      },
      error: (error) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
  // Add any methods or properties needed for the component here
}
