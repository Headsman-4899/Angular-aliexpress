import { Component, OnInit, Input } from '@angular/core';
import { samsung } from '../aliexpress_products'

@Component({
  selector: 'app-samsung-item',
  templateUrl: './samsung-item.component.html',
  styleUrls: ['./samsung-item.component.css']
})
export class SamsungItemComponent implements OnInit {
  aliexpress_product = samsung;
  constructor() { }

  ngOnInit(): void {
  }

}
