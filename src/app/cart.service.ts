import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from './mock-products';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Product): void {
    PRODUCTS.push(product);
  }

  // getOneProduct(id: number): Observable<Product> {
  //   const product = PRODUCTS.find((p) => p.id === id)!;
  //   return of(product);
  // }

  getAllProducts(): Observable<Product[]> {
    const items = of(PRODUCTS);
    return items;
  }

  // deleteProductById(id: number) {
  //   const product = PRODUCTS.find((p) => p.id === id)!;
  //   PRODUCTS.splice(PRODUCTS.indexOf(product), 1);
  // }
}
