import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[]=[];
  keyword:string = '';
  constructor(
    private _productService:ProductService
  ) { }

  ngOnInit(): void {
    this.products = this._productService.getAll();
  }



}
