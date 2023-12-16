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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    UsersComponent,
    CitiesComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
