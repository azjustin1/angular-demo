import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  URL = 'http://localhost:3000/products/';

  constructor(private http: HttpClient) {}

  getProductById(id: number): Observable<Product> {
    const product = this.http.get<Product>(this.URL + id);
    return product;
  }

  getProducts(): Observable<Product[]> {
    const products = this.http.get<Product[]>(this.URL);
    return products;
  }

  addProduct(product: Product): Observable<any> {
    const response = this.http.post<Observable<any>>(this.URL, product);
    return response;
  }

  updateProductById(id: number, product: Product): Observable<any> {
    return this.http.put<any>(this.URL + id, {
      name: product.name,
      price: product.price,
      description: product.description,
    });
  }

  deleteProductById(id: number): Observable<any> {
    return this.http.delete(this.URL + id);
  }
}
