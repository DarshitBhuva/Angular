import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Models/home/home.component';
import { ProductsComponent } from './Models/products/products.component';
import { UsersComponent } from './Models/users/users.component';
import { CitiesComponent } from './Models/cities/cities.component';
import { ProductDetailComponent } from './Models/products/product-detail/product-detail.component';
import { UserDetailComponent } from './Models/users/user-detail/user-detail.component';
import { CityDetailComponent } from './Models/cities/city-detail/city-detail.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'products', component: ProductsComponent},
  {path : 'products/:id', component:ProductDetailComponent},
  {path : 'users', component: UsersComponent},

  {path: '', children:[
    {path: 'users/:id', component:UserDetailComponent}
  ]},
  {path: 'cities', component:CitiesComponent},
  {path : '', children:[
    {path : 'cities/:id', component: CityDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
