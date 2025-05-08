import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IclientOrder } from '../../../../BL/Models/iclient-order';
import { ClientOrdersService } from '../../../../Core/Services/ClientOrders/client-orders.service';
import { HomeService } from '../../../../Core/Services/HomeService/home.service';
import { IProductServiceService } from '../../../../Core/Services/IProductService/iproduct-service.service';
import { IproductToRead } from '../../../../BL/Models/iproduct';

@Component({
  selector: 'app-contact-us-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.css',
})
export class ContactUsPageComponent implements OnInit {
  ClientOrder: IclientOrder = {} as IclientOrder;
  countires: any[] = [];
  products: IproductToRead[] = [] as IproductToRead[];
  constructor(
    private iclientService: ClientOrdersService,
    private _homeService: HomeService,
    private _iproductService: IProductServiceService
  ) {}
  ngOnInit(): void {
    this.GetCountries();
    this.GetProducts();
  }

  AddClientOrder() {
    this.iclientService.Add(this.ClientOrder).subscribe({
      next: (res) => {
        alert('تم ارسال الاستفار بنجاح سنتواصل معك في اسرع وقت');
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }

  GetCountries() {
    this.countires = this._homeService.GetArabicCountries();
  }

  GetProducts() {
    this._iproductService.GetAll().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
