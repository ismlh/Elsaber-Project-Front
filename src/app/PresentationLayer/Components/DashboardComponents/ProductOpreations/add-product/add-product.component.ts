import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IproductToWrite } from '../../../../../BL/Models/iproduct';
import { ICategoryToRead } from '../../../../../BL/Models/icategory';
import { ICategoryServiceService } from '../../../../../Core/Services/IcategoryService/icategory-service.service';
import { IProductServiceService } from '../../../../../Core/Services/IProductService/iproduct-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  product: IproductToWrite = {} as IproductToWrite;
  categories: ICategoryToRead[] = [] as ICategoryToRead[];

  selectedFiles: File[] | null = null;

  constructor(
    private _icategoryService: ICategoryServiceService,
    private _iproductService: IProductServiceService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories() {
    this._icategoryService.GetAll().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
  AddProduct() {
    this._iproductService
      .AddProduct(this.product, this.selectedFiles)
      .subscribe({
        next: (res) => {
          alert(res.name + ' تم اضافته');
          this._router.navigate(['/Dashboard/ProductIndex']);
        },
        error: () => {
          alert('حدث خطا ما تواصل مع الدعم الفني');
        },
      });
  }

  onFileSelected(event: any) {
    const files: File[] = Array.from(event.target.files);
    if (files.length > 0) {
      this.selectedFiles = files; // Store the files in the new property
    }
  }
}
