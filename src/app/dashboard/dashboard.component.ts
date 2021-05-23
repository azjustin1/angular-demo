import { ProductService } from './../product.service';
import { PRODUCTS } from './../mock-products';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];

  newName = new FormControl('');
  newPrice = new FormControl();
  newDescription = new FormControl('');

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  username?: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProduct();
  }

  get email() {
    return this.loginForm.get('email');
  }

  onSubmit() {
    // console.log(this.loginForm.value['email']);
  }

  clearInput() {
    this.newName = new FormControl('');
    this.newPrice = new FormControl();
    this.newDescription = new FormControl('');
  }

  getAllProduct() {
    // this.cartService
    //   .getAllProducts()
    //   .subscribe((products) => (this.products = products));
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  addNew() {
    const newProduct: Product = {
      id: 0,
      name: this.newName.value,
      price: this.newPrice.value,
      description: this.newDescription.value,
    };

    // PRODUCTS.push(newProduct);
    this.productService.addProduct(newProduct).subscribe(() => {
      this.getAllProduct();
    });
    this.clearInput();
  }

  delete() {}
}
