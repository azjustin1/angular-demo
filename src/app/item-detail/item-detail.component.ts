import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from './../product.service';
import { PRODUCTS } from './../mock-products';
import { Product } from './../product';
import { CartService } from './../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit {
  product?: Product;

  isEdit: boolean = false;

  editForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(),
    description: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getProductById(id)
      .subscribe((product) => (this.product = product));
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

  onSubmit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.updateProductById(id, this.product!).subscribe();
    this.toggleEdit();
    this.back();
  }

  delete() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  }

  back() {
    this.router.navigate(['/dashboard']);
  }
}
