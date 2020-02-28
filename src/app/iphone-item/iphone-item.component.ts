import { Component, OnInit } from '@angular/core';
import { iphone } from '../aliexpress_products';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-iphone-item',
  templateUrl: './iphone-item.component.html',
  styleUrls: ['./iphone-item.component.css']
})
export class IphoneItemComponent implements OnInit {
  // aliexpress_product = iphone;
  public products = [];

  constructor(private _productService: ProductService) { 
  }

  ngOnInit() {
    this.products = this._productService.getProducts();
  }

}
