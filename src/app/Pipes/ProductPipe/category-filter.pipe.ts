import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "src/app/Interfaces/product";

@Pipe({
    name : 'categoryfilter'
})

export class CategoryFilterPipe implements PipeTransform{
    transform(prodList: Product[], category : string) {
        
        if(category.toLowerCase() === 'all' || category === "" || prodList.length === 0)
        {
            return prodList;
        }
        else{
            return prodList.filter((product)=>{
                return product.category.toLowerCase() === category.toLowerCase();
            })
        }
    }
}