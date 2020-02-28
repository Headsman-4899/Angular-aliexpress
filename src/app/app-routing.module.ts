import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SamsungItemComponent } from './samsung-item/samsung-item.component';
import { IphoneItemComponent } from './iphone-item/iphone-item.component';
import { XiaomiItemComponent } from './xiaomi-item/xiaomi-item.component';
import { HuaweiItemComponent } from './huawei-item/huawei-item.component';


const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', 
    component: CategoryListComponent,
    children: [
      { path: 'iphone', component: IphoneItemComponent },
      { path: 'samsung', component: SamsungItemComponent },
      { path: 'xiaomi', component: XiaomiItemComponent },
      { path: 'huawei', component: HuaweiItemComponent }
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCompomemts = [
  ProductItemComponent,
]
