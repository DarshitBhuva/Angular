import { Component, inject } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent {

    // productService : ProductsService = inject(ProductsService);
    productList : Product[] = [];

    constructor(private productService : ProductsService){
      this.productService.getAllProducts().then((productList: Product[])=>{
        this.productList = productList;
        // console.log(productList)
      })
    }
}
