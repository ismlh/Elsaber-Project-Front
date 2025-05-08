import { Component } from '@angular/core';
import { Icompany } from '../../../../../BL/Models/icompany';
import { IcompanyServiceService } from '../../../../../Core/Services/ICompanyService/icompany-service.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.css',
})
export class AddCompanyComponent {
  company: Icompany = {} as Icompany;
  selectedFile: File | null = null;
  constructor(
    private _icompanyService: IcompanyServiceService,
    private _router: Router
  ) {}

  AddCompanyData() {
    this._icompanyService
      .AddCompanyData(this.company, this.selectedFile)
      .subscribe({
        next: (res) => {
          alert(res.name + ' تم اضافته ');
          this._router.navigate(['/Dashboard/CompanyIndex']);
        },
        error: (err) => {
          alert('بيانات الشركه مضافه بالفعل');
          this._router.navigate(['/Dashboard/CompanyIndex']);
        },
      });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file; // Store the file in the new property
    }
  }
}
