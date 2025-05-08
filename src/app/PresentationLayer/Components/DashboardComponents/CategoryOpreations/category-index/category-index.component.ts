import { Component, OnInit } from '@angular/core';
import { ICategoryToRead } from '../../../../../BL/Models/icategory';
import { ICategoryToWrite } from '../../../../../BL/Models/icategory';
import { ICategoryServiceService } from '../../../../../Core/Services/IcategoryService/icategory-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-index',
  imports: [CommonModule, FormsModule],
  templateUrl: './category-index.component.html',
  styleUrl: './category-index.component.css',
})
export class CategoryIndexComponent implements OnInit {
  categories: ICategoryToRead[] = [] as ICategoryToRead[];
  categoryName: string = '';
  categoryId: number = 0;
  isEdit: boolean = false;
  constructor(private _icategoryServiece: ICategoryServiceService) {}
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._icategoryServiece.GetAll().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }

  AddCategory() {
    if (this.categoryName.trim() === '') {
      alert('الـــرجــاء ادخــال اســم الــفــئــة');
      return;
    }
    this.isEdit = false; // Reset the edit mode
    this.categoryId = 0; // Reset the category ID
    const newCategory: ICategoryToWrite = {
      name: this.categoryName,
    } as ICategoryToWrite;
    this._icategoryServiece.Add(newCategory).subscribe({
      next: (res) => {
        alert(res.name + ' تم اضافته');
        this.getAll();
        this.categoryName = ''; // Clear the input field after adding
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }

  Edit(categoryName: string, id: number) {
    this.categoryId = id;
    this.categoryName = categoryName;
    this.isEdit = true;
  }

  UpdateCategory() {
    if (this.categoryName.trim() === '') {
      alert('الـــرجــاء ادخــال اســم الــفــئــة');
      return;
    }
    const updatedCategory: ICategoryToWrite = {
      name: this.categoryName,
    } as ICategoryToWrite;
    this._icategoryServiece.Edit(this.categoryId, updatedCategory).subscribe({
      next: (res) => {
        alert(res.name + ' تم تعديله');
        this.getAll();
        this.categoryName = ''; // Clear the input field after updating
        this.isEdit = false; // Reset the edit mode
        this.categoryId = 0; // Reset the category ID
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }

  Delete(id: number) {
    this._icategoryServiece.Delete(id).subscribe({
      next: (res) => {
        alert(res.name + ' تم حـــذفه');
        this.getAll();
      },
      error: () => {
        alert('حدث خطا ما تواصل مع الدعم الفني');
      },
    });
  }
}
