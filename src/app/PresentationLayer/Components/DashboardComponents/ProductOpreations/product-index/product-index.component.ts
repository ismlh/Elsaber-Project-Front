import { Component, OnInit } from '@angular/core';
import { IproductToRead } from '../../../../../BL/Models/iproduct';
import { IProductServiceService } from '../../../../../Core/Services/IProductService/iproduct-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-index',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-index.component.html',
  styleUrl: './product-index.component.css',
})
export class ProductIndexComponent implements OnInit {
  products: IproductToRead[] = [] as IproductToRead[];
  constructor(private _iproductService: IProductServiceService) {}

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    this._iproductService.GetAll().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }

  DeleteProduct(id: number) {
    this._iproductService.DeleteProduct(id).subscribe({
      next: (res) => {
        alert(res.name + ' تم حذفه');
        this.GetAll();
      },
      error: (err) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
