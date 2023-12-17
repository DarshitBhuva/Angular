import { Pipe, PipeTransform } from "@angular/core";
import { City } from "src/app/Interfaces/city";
import { Product } from "src/app/Interfaces/product";

@Pipe({
    name : 'countryfilter'
})

export class CountryFilterPipe implements PipeTransform{
    transform(citiesList: City[], country : string) {
        
        if(country.toLowerCase() === 'all' || country === "" || citiesList.length === 0)
        {
            return citiesList;
        }
        else{
            return citiesList.filter((city)=>{
                return city.country.toLowerCase() === country.toLowerCase();
            })
        }
    }
}