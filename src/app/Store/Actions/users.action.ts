import { User } from "src/app/Interfaces/user";

export class GetUsers{
    static readonly type = '[User] Get';
}

export class SetSelectedUser{
    static readonly type = "[User] Set";
    constructor(public id : number){}
}
export class GetUserById{
    static readonly type = '[User] Get';

    constructor(public id: number){}
}