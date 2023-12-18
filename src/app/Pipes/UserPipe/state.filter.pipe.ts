import { Pipe, PipeTransform } from "@angular/core";
import { User } from "src/app/Interfaces/user";


@Pipe({
    name : 'statefilter'
})

export class StateFilterPipe implements PipeTransform{
    transform(userList: User[], state : string) {
        if(state.toLowerCase() === 'all' || state === "" || userList.length === 0)
        {
            return userList;
        }
        else{
            return userList.filter((user)=>{
                return user.address.state.toLowerCase() === state.toLowerCase();
            })
        }
    }
}
