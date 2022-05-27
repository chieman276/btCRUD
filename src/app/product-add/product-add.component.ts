import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../productservice.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm!: FormGroup;

  constructor(
    private _ActivateRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      price: new FormControl('',[
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    let formData = this.productForm.value;
    let product: Product = {
      id: formData.id,
      name: formData.name,
      price: formData.price
    }
    
    this._ProductService.store(product);

    this._Router.navigate(['/products']);

  }

}
