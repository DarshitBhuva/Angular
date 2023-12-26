import { Pipe, PipeTransform } from "@angular/core";
import { User } from "src/app/Interfaces/user";


@Pipe({
    name : 'genderfilter'
})

export class genderFilterPipe implements PipeTransform{
    transform(userList : User[] = [], filterBy : string) {
        if(filterBy.toLowerCase() === 'all' || filterBy === "" || userList.length === 0)
        {
            return userList;
        }
        else{
            return userList.filter((user)=>{
                return user.gender.toLowerCase() === filterBy.toLowerCase();
            })
        }
    }
}
