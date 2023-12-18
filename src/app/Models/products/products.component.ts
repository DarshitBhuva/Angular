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
    uniqueProdCategories : string[] = [];

    filterText = "All";
    stockvalue = 0;

    constructor(private productService : ProductsService){
      this.productService.getAllProducts().then((productList: Product[])=>{
        this.productList = productList;
        this.uniqueProdCategories = Array.from(new Set(this.productList.map(prod=>prod.category)))
      })
    }
}
