import { Component} from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { ProductsService } from 'src/app/Services/products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductsService]
})
export class ProductDetailComponent {

  product!: Product;
  productId!: number;

  
  constructor(private productService: ProductsService, private route: ActivatedRoute){
    
    this.route.params.subscribe((params: Params) => {
      // Extract the 'id' parameter and convert it to a number
      this.productId = params['id'];
      console.log(this.productId);
    });

    this.productService.getProductById(this.productId).then((product:Product)=>{
      if(product !== undefined)
        this.product = product;
      console.log(product);
    })
  }

}
