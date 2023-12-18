import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Models/navbar/navbar.component';
import { HomeComponent } from './Models/home/home.component';
import { FooterComponent } from './Models/footer/footer.component';
import { ProductsComponent } from './Models/products/products.component';
import { UsersComponent } from './Models/users/users.component';
import { CitiesComponent } from './Models/cities/cities.component';
import { ProductDetailComponent } from './Models/products/product-detail/product-detail.component';
import { UserDetailComponent } from './Models/users/user-detail/user-detail.component';
import { CityDetailComponent } from './Models/cities/city-detail/city-detail.component';
import { FormsModule } from '@angular/forms';
import { genderFilterPipe } from './Pipes/UserPipe/gender-filter.pipe';
import { CategoryFilterPipe } from './Pipes/ProductPipe/category-filter.pipe';
import { CountryFilterPipe } from './Pipes/CityPipe/country-filter.pipe';
import { StockFilterPipe } from './Pipes/ProductPipe/stock-filter.pipe';
import { StateFilterPipe } from './Pipes/UserPipe/state.filter.pipe';
import { CityFilterPipe } from './Pipes/UserPipe/city-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    UsersComponent,
    CitiesComponent,
    ProductDetailComponent,
    UserDetailComponent,
    CityDetailComponent,
    genderFilterPipe,
    StateFilterPipe,
    CityFilterPipe,
    CategoryFilterPipe,
    StockFilterPipe,
    CountryFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
