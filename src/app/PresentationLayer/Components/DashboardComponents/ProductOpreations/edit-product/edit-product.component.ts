import { Component, OnInit } from '@angular/core';
import { IProductServiceService } from '../../../../../Core/Services/IProductService/iproduct-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IproductToRead } from '../../../../../BL/Models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ICategoryToRead } from '../../../../../BL/Models/icategory';
import { ICategoryServiceService } from '../../../../../Core/Services/IcategoryService/icategory-service.service';
import { ImagesServiceService } from '../../../../../Core/Services/ImageService/images-service.service';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnInit {
  product: IproductToRead = {} as IproductToRead;
  productId: number = 0;
  selectedFiles: File[] | null = null;
  categories: ICategoryToRead[] = [] as ICategoryToRead[];

  constructor(
    private _iproductService: IProductServiceService,
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _icategoryService: ICategoryServiceService,
    private _imageService: ImagesServiceService
  ) {}
  ngOnInit(): void {
    this._activateRoute.params.subscribe((paramMap) => {
      this.productId = paramMap['id'];
      this.GetById(this.productId);
    });
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
  GetById(id: number) {
    this._iproductService.GetById(id).subscribe({
      next: (res) => {
        this.product = res;
      },
      error: (err) => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }

  EditProduct() {
    this._iproductService
      .EditProduct(this.productId, this.product, this.selectedFiles)
      .subscribe({
        next: (res) => {
          alert(res.name + ' تم تعديله بنجاح');
          this._router.navigate(['/Dashboard/ProductIndex']);
        },
        error: (err) => {
          alert('حدث خطا ما تواصل مع الدعم الفني');

          console.log(err);
        },
      });
  }

  onFileSelected(event: any) {
    const files: File[] = Array.from(event.target.files);
    if (files.length > 0) {
      this.selectedFiles = files; // Store the files in the new property
    }
  }

  DeleteImage(id: number) {
    this._imageService.Delete(id).subscribe({
      next: (res) => {
        alert(res.name + 'تـــم حـــذفـــه');
        this.GetById(this.productId);
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
