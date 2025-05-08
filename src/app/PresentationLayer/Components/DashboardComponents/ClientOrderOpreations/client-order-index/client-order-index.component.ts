import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientOrdersService } from '../../../../../Core/Services/ClientOrders/client-orders.service';
import { IclientOrder } from '../../../../../BL/Models/iclient-order';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-client-order-index',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './client-order-index.component.html',
  styleUrl: './client-order-index.component.css',
})
export class ClientOrderIndexComponent implements OnInit {
  orders: IclientOrder[] = [] as IclientOrder[];
  constructor(private _ClientOrderService: ClientOrdersService) {}

  ngOnInit(): void {
    this.getOrders();
  }
  getOrders() {
    this._ClientOrderService.GetAll().subscribe({
      next: (res) => {
        this.orders = res;
      },
      error: (err) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
  DeleteClientOrder(id: number) {
    this._ClientOrderService.Delete(id).subscribe({
      next: (res) => {
        alert('تم حذف الطلب بنجاح');
        this.getOrders();
      },
      error: (err) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
