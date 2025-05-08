import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Icompany } from '../../../../../BL/Models/icompany';
import { IcompanyServiceService } from '../../../../../Core/Services/ICompanyService/icompany-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-company-data',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-company-data.component.html',
  styleUrl: './edit-company-data.component.css',
})
export class EditCompanyDataComponent implements OnInit {
  company: Icompany = {} as Icompany;
  companyId: number = 0;
  selectedFile: File | null = null;

  constructor(
    private _icompanyService: IcompanyServiceService,
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this._activateRoute.params.subscribe((paramMap) => {
      this.companyId = paramMap['id'];
      this.GetCompanyData(this.companyId);
    });
  }
  GetCompanyData(id: number) {
    this._icompanyService.GetById(id).subscribe({
      next: (res) => {
        this.company = res;
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file; // Store the file in the new property
    }
  }

  EditCompanyData() {
    this._icompanyService
      .EditCompanyData(this.company, this.selectedFile)
      .subscribe({
        next: (res) => {
          alert(res.name + ' تم تعديله');
          this._router.navigate(['/Dashboard/CompanyIndex']);
        },
        error: () => {
          alert('حدث خطا ما تواصل مع الدعم الفني');

          this._router.navigate(['/Dashboard/CompanyIndex']);
        },
      });
  }
}
