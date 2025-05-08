import { Component, OnInit } from '@angular/core';
import { IclientOrder } from '../../../../../BL/Models/iclient-order';
import { ClientOrdersService } from '../../../../../Core/Services/ClientOrders/client-orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../../../../../Core/Services/HomeService/home.service';
import { IProductServiceService } from '../../../../../Core/Services/IProductService/iproduct-service.service';
import { IproductToRead } from '../../../../../BL/Models/iproduct';

@Component({
  selector: 'app-client-order-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './client-order-edit.component.html',
  styleUrl: './client-order-edit.component.css',
})
export class ClientOrderEditComponent implements OnInit {
  ClientOrder: IclientOrder = {} as IclientOrder;
  countires: any[] = [];
  products: IproductToRead[] = [] as IproductToRead[];
  orderId: number = 0;

  constructor(
    private iclientService: ClientOrdersService,
    private _activateRoute: ActivatedRoute,
    private _homeService: HomeService,
    private _iproductService: IProductServiceService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this._activateRoute.params.subscribe((paramMap) => {
      this.orderId = paramMap['id'];
      this.GetClientOrder(this.orderId);
      this.GetCountries();
      this.GetProducts();
    });
  }
  GetClientOrder(id: number) {
    this.iclientService.GetById(id).subscribe({
      next: (res) => {
        this.ClientOrder = res;
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
  EditOrder() {
    this.iclientService.Update(this.ClientOrder, this.orderId).subscribe({
      next: (res) => {
        alert('تم تعديل الطلب بنجاح');
        this._router.navigate(['/Dashboard/ClientOrdersIndex']);
      },
      error: (err) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');

        console.log(err);
      },
    });
  }
}
