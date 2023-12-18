import { Pipe, PipeTransform } from "@angular/core";
import { User } from "src/app/Interfaces/user";


@Pipe({
    name : 'cityfilter'
})

export class CityFilterPipe implements PipeTransform{
    transform(userList: User[], city : string) {
        if(city.toLowerCase() === 'all' || city === "" || userList.length === 0)
        {
            return userList;
        }
        else{
            return userList.filter((user)=>{
                return user.address.city.toLowerCase() === city.toLowerCase();
            })
        }
    }
}
