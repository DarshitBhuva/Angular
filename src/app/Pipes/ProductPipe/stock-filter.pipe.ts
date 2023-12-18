import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "src/app/Interfaces/product";

@Pipe({
    name : 'Stockfilter'
})

export class StockFilterPipe implements PipeTransform{
    transform(prodList: Product[], stock : number) {
        
        if(stock === 0 || prodList.length === 0)
        {
            return prodList;
        }
        else{
            return prodList.filter((product)=>{
                return product.stock >= stock;
            })
        }
    }
}