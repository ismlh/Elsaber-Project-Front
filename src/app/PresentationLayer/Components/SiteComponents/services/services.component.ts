import { Component } from '@angular/core';
import { HomeService } from '../../../../Core/Services/HomeService/home.service';
import { Iservice } from '../../../../BL/Models/iservice';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services: Iservice[] = [] as Iservice[]; // Initialize services as an empty array
  constructor(private _homeService: HomeService) {}
  ngOnInit(): void {
    this.getServices();
  }
  getServices() {
    this._homeService.GetServices().subscribe({
      next: (data) => {
        this.services = data;
      },
      error: (error) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
