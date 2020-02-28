import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public categories = [];

  constructor(private _categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categories = this._categoryService.getCategories();
  }
  redirect(path) {

    window.location.href = path;

  } 


}
