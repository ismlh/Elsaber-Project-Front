import { Component, OnInit } from '@angular/core';
import { ICategoryToRead } from '../../../../BL/Models/icategory';
import { IproductToRead } from '../../../../BL/Models/iproduct';
import { IProductServiceService } from '../../../../Core/Services/IProductService/iproduct-service.service';
import { ICategoryServiceService } from '../../../../Core/Services/IcategoryService/icategory-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent implements OnInit {
  categories: ICategoryToRead[] = [] as ICategoryToRead[];
  products: IproductToRead[] = [] as IproductToRead[];
  dataLength: number = 0;
  activeIndex = 0; // Initially, the first item is active
  selectedCategory: number = 0;
  pageNumber: number = 1;
  pageSize: number = 12;

  productsToserach: IproductToRead[] = [] as IproductToRead[];

  constructor(
    private _productSerives: IProductServiceService,
    private _categoryService: ICategoryServiceService
  ) {}

  ngOnInit(): void {
    this.GetProducts(this.pageNumber, this.pageSize, 0);
    this.GetCategories();
    this.GetProductsLength();
  }
  async filterData(categoryId: number) {
    this.selectedCategory = categoryId;
    await this.GetProducts(this.pageNumber, this.pageSize, categoryId);
    if (categoryId != 0) this.dataLength = Math.ceil(this.products.length / 12);
    else this.GetProductsLength();
  }

  GetProducts(pageNumber: number, pageSize: number, categoryId: number) {
    this._productSerives
      .GetPagnetedData(pageNumber, pageSize, categoryId)
      .subscribe({
        next: (res) => {
          this.products = res;
        },
        error: () => {
          alert('حدث خطا ما تواصل مع الدعم الفني');
        },
      });
  }

  GetProductsLength() {
    this._productSerives.GetDataLength().subscribe({
      next: (res) => {
        this.dataLength = Math.ceil(res / 12);
        //assume i display 12 item per page
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }

  GetCategories() {
    this._categoryService.GetAll().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
  makeItActive(element: any) {
    document.querySelectorAll('p').forEach((p) => p.classList.remove('active'));
    element.classList.add('active');
  }

  setActive(index: number) {
    this.activeIndex = index; // Update active index on click
  }

  getRange(length: number): number[] {
    return Array.from({ length }, (_, i) => i);
  }

  SearchProducts(input: HTMLInputElement) {
    if (this.productsToserach.length == 0) {
      this.productsToserach = this.products;
    }
    if (input.value === '') this.products = this.productsToserach;
    else
      this.products = this.products.filter((x) => x.name.includes(input.value));
  }

  IncreasePagination() {
    this.activeIndex++;

    this.GetProducts(
      this.activeIndex + 1,
      this.pageSize,
      this.selectedCategory
    );
  }
  DecreasePagination() {
    this.activeIndex--;

    this.GetProducts(
      this.activeIndex + 1,
      this.pageSize,
      this.selectedCategory
    );
  }
}
