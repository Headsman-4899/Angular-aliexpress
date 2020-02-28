import { Component, OnInit } from '@angular/core';
import { huawei } from '../aliexpress_products'

@Component({
  selector: 'app-huawei-item',
  templateUrl: './huawei-item.component.html',
  styleUrls: ['./huawei-item.component.css']
})
export class HuaweiItemComponent implements OnInit {
  aliexpress_product = huawei;
  constructor() { }

  ngOnInit(): void {
  }

}
