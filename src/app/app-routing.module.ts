import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Models/home/home.component';
import { ProductsComponent } from './Models/products/products.component';
import { UsersComponent } from './Models/users/users.component';
import { CitiesComponent } from './Models/cities/cities.component';
import { ProductDetailComponent } from './Models/products/product-detail/product-detail.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'products', component: ProductsComponent},
  {path : 'products/:id', component:ProductDetailComponent},
  {path : 'users', component: UsersComponent},
  {path: 'cities', component:CitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
