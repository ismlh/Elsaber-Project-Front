import { Component, OnInit } from '@angular/core';
import { IcompanyServiceService } from '../../../../../Core/Services/ICompanyService/icompany-service.service';
import { Icompany } from '../../../../../BL/Models/icompany';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-company-index',
  imports: [CommonModule, RouterLink],
  templateUrl: './company-index.component.html',
  styleUrl: './company-index.component.css',
})
export class CompanyIndexComponent implements OnInit {
  Companies: Icompany[] = [] as Icompany[];
  Company: Icompany = {} as Icompany;
  isAvalibleToAdd: boolean = true; // Initialize to true to show the button initially
  constructor(private _icompanyservice: IcompanyServiceService) {}
  ngOnInit(): void {
    this.GetAllCompanies();
  }

  // Example method
  GetAllCompanies() {
    this._icompanyservice.GetAll().subscribe({
      next: (data) => {
        this.Companies = data; // Assign the fetched data to the Companies property

        if (this.Companies.length > 0) {
          this.isAvalibleToAdd = false; // Set to true if there are companies available
          this.Company = this.Companies[0];
        } else {
          this.isAvalibleToAdd = true; // Set to false if there are no companies available
          this.Company = {} as Icompany;
        }
      },
      error: (error) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
  DeleteCompany(id: number) {
    this._icompanyservice.Delete(id).subscribe({
      next: (data) => {
        alert(`${data.name} تم حذفه بنجاح`);
        this.GetAllCompanies();
      },
      error: (error) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
