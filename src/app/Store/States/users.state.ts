import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { User } from "src/app/Interfaces/user";
import { GetUsers, SetSelectedUser } from "../Actions/users.action";
import { UsersService } from "src/app/Services/users.service";

// State Model
export class UserStateModel {
    users !: User[];
    userLoaded !: boolean;
    selectedUser ?: User;
}


// State
@State<UserStateModel>({
    name: 'users',
    defaults: {
        users: [],
        userLoaded:false,
        selectedUser : undefined
    }
})

@Injectable()
export class UserState {


    constructor(private _userService: UsersService){}

    // Get User list from State
    @Selector()
    static getUseList(state: UserStateModel) {
        return state.users;
    }

    // Get the status of user whether it is loaded or not
    @Selector()
    static UserLoaded(state: UserStateModel){
        return state.userLoaded;
    }

    // Get Selected User from State
    @Selector()
    static SelectedUser(state: UserStateModel){
        return state.selectedUser;
    }

    @Action(GetUsers)
    getUsers({getState, setState}: StateContext<UserStateModel>){

        return this._userService.getAllUsers().then((res : User[])=>{
           const state = getState();
        //    console.log(getState());
           setState({
            ...state,
            users : res,
            userLoaded:true
           })

        //    console.log(getState());
        })
    }


    @Action(SetSelectedUser)
    setSelectedUser({getState, setState} : StateContext<UserStateModel>, {id}:SetSelectedUser){
        console.log(id);
    }

}