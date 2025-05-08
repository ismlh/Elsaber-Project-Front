import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IproductToRead } from '../../../../BL/Models/iproduct';
import { IProductServiceService } from '../../../../Core/Services/IProductService/iproduct-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Icompany } from '../../../../BL/Models/icompany';
import { HomeService } from '../../../../Core/Services/HomeService/home.service';

@Component({
  selector: 'app-product-detalis',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-detalis.component.html',
  styleUrl: './product-detalis.component.css',
})
export class ProductDetalisComponent implements OnInit {
  product: IproductToRead = {} as IproductToRead;
  relatedProducts: IproductToRead[] = [] as IproductToRead[];
  companyData: Icompany = {} as Icompany;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _iproductService: IProductServiceService,
    private _homeService: HomeService
  ) {}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((paramMap) => {
      this.GetById(paramMap['id']);
    });
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
  GetById(id: number) {
    this._iproductService.GetById(id).subscribe({
      next: (res) => {
        this.product = res;
        this.GetRelatedProducts(res.categoryId); // Fetch related only after main product loads
      },
      error: (err) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }

  GetRelatedProducts(categoryId: number) {
    this._iproductService.GetProductsByCategoryId(categoryId).subscribe({
      next: (res) => {
        this.relatedProducts = res.products
          .filter((p: { id: number }) => p.id !== this.product?.id)
          .slice(0, 4); // Exclude current product
      },

      error: (err) => {
        alert('حدث خطأ أثناء جلب المنتجات المشابهة');
      },
    });
  }

  ChangeImage(img: HTMLImageElement, mainImage: HTMLImageElement) {
    mainImage.src = img.src;
  }

  openWhatsapp() {
    window.open('https://wa.me/' + this.companyData.phone);
  }
}
