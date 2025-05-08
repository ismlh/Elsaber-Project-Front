import { Component, OnInit } from '@angular/core';
import { IKhedmaService } from '../../../../../Core/Services/IkhadmatSevice/ikhedma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iservice } from '../../../../../BL/Models/iservice';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-service',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-service.component.html',
  styleUrl: './edit-service.component.css',
})
export class EditServiceComponent implements OnInit {
  serviceToEdit: Iservice = {} as Iservice;
  serviceId!: number;
  selectedFile: File | null = null;
  constructor(
    private _iKhedmaService: IKhedmaService,
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this._activateRoute.params.subscribe((paramMap) => {
      this.serviceId = paramMap['id'];
      this.GetServieceData(this.serviceId);
    });
  }
  GetServieceData(id: number) {
    this._iKhedmaService.GetById(id).subscribe({
      next: (res) => {
        this.serviceToEdit = res;
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

  EditService() {
    this._iKhedmaService
      .Edit(this.serviceToEdit.id, this.serviceToEdit, this.selectedFile)
      .subscribe({
        next: (res) => {
          alert(res.name + ' تمت التعديل بنجاح');
          this._router.navigate(['/Dashboard/ServicesIndex']);
        },
        error: (err) => {
          alert('حدث خطا ما تواصل مع الدعم الفني');
        },
      });
  }
}
