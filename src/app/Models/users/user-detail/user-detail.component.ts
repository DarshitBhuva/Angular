import { Component } from '@angular/core';
import { User } from 'src/app/Interfaces/user';
import { UsersService } from 'src/app/Services/users.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

    user !: User;
    userId !: number;

    constructor(private userService : UsersService, private route: ActivatedRoute){

      this.route.params.subscribe((params: Params) => {
        // Extract the 'id' parameter and convert it to a number
        this.userId = params['id'];
        console.log(this.userId);
      });

      this.userService.getUserById(this.userId).then((user:User)=>{
        this.user = user;
        console.log(user);
      })

    }
}
