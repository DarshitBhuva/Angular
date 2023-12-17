import { Component } from '@angular/core';
import { User } from 'src/app/Interfaces/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  userList : User[] = [];

  filterText:string = "All";


  

  constructor(private userService : UsersService){

    

    this.userService.getAllUsers().then((userList : User[])=>{

      this.userList = userList;
    })

  }

}
