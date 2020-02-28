import { Component, OnInit } from '@angular/core';
import { xiaomi } from '../aliexpress_products'

@Component({
  selector: 'app-xiaomi-item',
  templateUrl: './xiaomi-item.component.html',
  styleUrls: ['./xiaomi-item.component.css']
})
export class XiaomiItemComponent implements OnInit {
  aliexpress_product = xiaomi;

  constructor() { }

  ngOnInit(): void {
  }

}
