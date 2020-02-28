import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  constructor() { }

  getCategories()  {
    return [
      { id: 1, name: 'Iphone', path: 'iphone' },
      { id: 2, name: 'Samsung', path: 'samsung' },
      { id: 3, name: 'Xiaomi', path: 'xiaomi' },
      { id: 4, name: 'Huawei', path: 'huawei' }
    ]
  }
}
