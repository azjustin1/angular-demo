import { ProductService } from './../product.service';
import { CartService } from './../cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() id?: number;
  @Input() name?: string;
  @Input() price?: number;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  removeProduct() {
    // if (this.id) this.cartService.deleteProductById(this.id);
    if (this.id) this.productService.deleteProductById(this.id).subscribe();
  }
}
