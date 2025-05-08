import { Component, HostListener, OnInit } from '@angular/core';
import { HomeService } from '../../../../Core/Services/HomeService/home.service';
import { Icompany } from '../../../../BL/Models/icompany';
import { ServicesComponent } from '../services/services.component';
import { OrdersComponent } from '../orders/orders.component';
import { TaghleefComponent } from '../taghleef/taghleef.component';
import { QuestionAndAnswerComponent } from '../question-and-answer/question-and-answer.component';
import { ContactWithUsComponent } from '../contact-with-us/contact-with-us.component';
import { ContactandinquiriesComponent } from '../contactandinquiries/contactandinquiries.component';

@Component({
  selector: 'app-home',
  imports: [
    ServicesComponent,
    OrdersComponent,
    TaghleefComponent,
    QuestionAndAnswerComponent,
    ContactWithUsComponent,
    ContactandinquiriesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  companyData: Icompany = {} as Icompany;

  constructor(private _homeService: HomeService) {}
  ngOnInit(): void {
    this.getCompanyData();
  }
  getCompanyData() {
    this._homeService.GetCompanyData().subscribe({
      next: (data) => {
        this.companyData = data;
      },
      error: (error) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }

  // Listen to window scroll events

  OpenWhatsApp() {
    window.open('https://wa.me/' + this.companyData.phone);
  }

  openYoutube() {
    if (
      this.companyData.youtubeUrl != null ||
      this.companyData.youtubeUrl != 'undefined'
    )
      window.open(this.companyData.youtubeUrl);
  }
}
