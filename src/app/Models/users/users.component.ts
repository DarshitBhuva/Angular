import { Component } from '@angular/core';
import { User } from 'src/app/Interfaces/user';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  userList: User[] = [];

  filterText: string = "All";
  city: string = "All";
  state: string = "All";

  uniqueStates: string[] = [];
  uniqueCities: string[] = [];

  constructor(private userService: UsersService) {



    if (this.userService.userList) {
      this.userList = this.userService.userList;
    }
    else {

      this.userService.getAllUsers().then((userList: User[]) => {

        this.userList = userList;
        this.userService.userList = userList;
      })
    }

    this.uniqueCities = Array.from(new Set(this.userList.map(user => user.address.city)));
    this.uniqueStates = Array.from(new Set(this.userList.map(user => user.address.state)));

  }

}
