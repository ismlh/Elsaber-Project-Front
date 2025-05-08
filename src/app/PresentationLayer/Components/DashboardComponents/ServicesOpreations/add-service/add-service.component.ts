import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iservice } from '../../../../../BL/Models/iservice';
import { Router, RouterLink } from '@angular/router';
import { IKhedmaService } from '../../../../../Core/Services/IkhadmatSevice/ikhedma.service';

@Component({
  selector: 'app-add-service',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.css',
})
export class AddServiceComponent {
  service: Iservice = {} as Iservice;
  selectedFile: File | null = null;

  constructor(
    private _iKhedmaService: IKhedmaService,
    private _router: Router
  ) {}

  AddnewService() {
    this._iKhedmaService.Add(this.service, this.selectedFile).subscribe({
      next: (res) => {
        alert(res.name + ' تمت الإضافة بنجاح');
        this._router.navigate(['/Dashboard/ServicesIndex']);
      },
      error: (err) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
        this._router.navigate(['/Dashboard/ServicesIndex']);
      },
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      // Store the file in the new property
    }
  }
}
