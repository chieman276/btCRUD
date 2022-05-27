import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../productservice.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  id: any = 0;
  product!: Product;

  constructor(
    private _ActivateRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {

    this._ActivateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id =id;


      this.product = this._ProductService.find(id);
    });
  }

  handleYes() {
    this._ProductService.destroy(this.id);

    this._Router.navigate(['/products']);
  }
  handleNo(){
    this._Router.navigate(['/products']);
  }

}
