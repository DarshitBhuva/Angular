import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/Interfaces/user';
import { UsersService } from 'src/app/Services/users.service';
import { GetUsers } from 'src/app/Store/Actions/users.action';
import { UserState } from 'src/app/Store/States/users.state';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  userList: User[] = [];

  @Select(UserState.getUseList) userList$ !: Observable<User[]>;
  @Select(UserState.UserLoaded) userLoaded$ !: Observable<boolean>;

  userLoadedSub !: Subscription;
  filterText: string = "All";
  city: string = "All";
  state: string = "All";

  uniqueStates: string[] = [];
  uniqueCities: string[] = [];

  ngOnInit() {

    this.userLoadedSub = this.userLoaded$.subscribe(userloaded => {
      if (userloaded === false) {
        this.getUsers();
      }
      this.userList$.subscribe(res => {
        console.log("State Slice ", res);
        this.userList = res;
      })
    })

  }

  ngOnDestroy() {
    this.userLoadedSub.unsubscribe();
  }
  constructor(private userService: UsersService, private store: Store) {



    // if (this.userService.userList) {
    //   this.userList = this.userService.userList;
    // }
    // else {

    //   this.userService.getAllUsers().then((userList: User[]) => {

    //     this.userList = userList;
    //     this.userService.userList = userList;
    //   })
    // }

    // this.uniqueCities = Array.from(new Set(this.userList.map(user => user.address.city)));
    // this.uniqueStates = Array.from(new Set(this.userList.map(user => user.address.state)));

  }

  getUsers() {
    this.store.dispatch(new GetUsers());
  }

}
