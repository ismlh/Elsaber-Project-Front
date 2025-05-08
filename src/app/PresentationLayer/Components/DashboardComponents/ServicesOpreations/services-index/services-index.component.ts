import { Component, OnInit } from '@angular/core';
import { IKhedmaService } from '../../../../../Core/Services/IkhadmatSevice/ikhedma.service';
import { Router, RouterLink } from '@angular/router';
import { Iservice } from '../../../../../BL/Models/iservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services-index',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './services-index.component.html',
  styleUrl: './services-index.component.css',
})
export class ServicesIndexComponent implements OnInit {
  services: Iservice[] = [] as Iservice[];

  constructor(private _ikhedmaService: IKhedmaService) {}
  ngOnInit(): void {
    this.GetAll();
  }
  GetAll() {
    this._ikhedmaService.GetAll().subscribe({
      next: (res) => {
        this.services = res;
      },
      error: () => {
        alert('Some Thing Wrong Happened');
      },
    });
  }

  DeleteService(id: number) {
    this._ikhedmaService.Delete(id).subscribe({
      next: (res) => {
        alert(res.name + ' تم الحذف بنجاح');
        this.GetAll();
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
