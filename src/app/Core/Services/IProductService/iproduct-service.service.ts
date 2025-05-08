import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IproductToRead, IproductToWrite } from '../../../BL/Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from '../../../BL/Environments/Ienvironment';

@Injectable({
  providedIn: 'root',
})
export class IProductServiceService {
  constructor(private _httpClient: HttpClient) {}

  // Get all products from the API
  GetAll(): Observable<IproductToRead[]> {
    return this._httpClient.get<IproductToRead[]>(
      `${environment.connectionString}api/Products`
    );
  }

  // Get a product by ID from the API
  GetById(id: number): Observable<IproductToRead> {
    return this._httpClient.get<IproductToRead>(
      `${environment.connectionString}api/Products/${id}`
    );
  }

  GetProductsByCategoryId(categoryId: number): Observable<any> {
    return this._httpClient.get<any>(
      `${environment.connectionString}api/Products/GetProductsInCategory/${categoryId}`
    );
  }

  GetPagnetedData(
    pageNumber: number,
    pageSize: number,
    categoryId: number
  ): Observable<IproductToRead[]> {
    return this._httpClient.get<IproductToRead[]>(
      `${environment.connectionString}api/Products/GetPagnetedData/${categoryId}?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  }

  GetDataLength(): Observable<number> {
    return this._httpClient.get<number>(
      `${environment.connectionString}api/Products/GetDataLength`
    );
  }

  // Add a new product to the API
  AddProduct(product: IproductToWrite, files: File[] | null): Observable<any> {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('detalis', product.detalis);
    formData.append('size', product.size);
    formData.append('minQty', product.minQty.toString());
    formData.append('categoryId', product.categoryId.toString());
    if (files) {
      files.forEach((file) => {
        formData.append('Files', file); // Append each file object
      });
    }

    return this._httpClient.post<any>(
      `${environment.connectionString}api/Products`,
      formData
    );
  }

  EditProduct(
    id: number,
    product: IproductToWrite,
    files: File[] | null
  ): Observable<any> {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('detalis', product.detalis);
    formData.append('size', product.size);
    formData.append('minQty', product.minQty.toString());
    formData.append('categoryId', product.categoryId.toString());
    if (files) {
      files.forEach((file) => {
        formData.append('Files', file); // Append each file object
      });
    }

    return this._httpClient.put<any>(
      `${environment.connectionString}api/Products/${id}`,
      formData
    );
  }

  DeleteProduct(id: number): Observable<any> {
    return this._httpClient.delete<any>(
      `${environment.connectionString}api/Products/${id}`
    );
  }
}
