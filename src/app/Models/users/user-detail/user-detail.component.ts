import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/Interfaces/user';
import { UsersService } from 'src/app/Services/users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SetSelectedUser } from 'src/app/Store/Actions/users.action';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

    user !: User;
    userId !: number;

    @ViewChild('myForm') form !: NgForm;

    constructor(private userService : UsersService, private route: ActivatedRoute, private store : Store){

      this.route.params.subscribe((params: Params) => {
        // Extract the 'id' parameter and convert it to a number
        this.userId = params['id'];
        console.log(this.userId);
      });

      this.userService.getUserById(this.userId).then((user:User)=>{
        this.user = user;
        console.log(user);

        this.form.setValue({
          uname : this.user.userName,
          gender : this.user.gender,
          email : this.user.email,
          pnumber:this.user.phone,
          street : this.user.address.street,
          city: this.user.address.city,
          state: this.user.address.state
        })
      })

    }

    ngOnInit(){
      this.getUserById(this.userId);
    }

    onSubmit(){
      console.log(this.form.value);
    }

    getUserById(id: number){
      this.store.dispatch(new SetSelectedUser(id));
    }
}

