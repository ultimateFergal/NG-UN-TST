import { Component, OnInit } from '@angular/core';

import { UsersService } from './../users.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // user: User;
  users: User[] = [];
  selectedUser: User | any = {};

  constructor( private usersService: UsersService ) { 
/*     this.user = new User(
      'valentina',
      'valentina@gmail.com'
      ,'23424'
    ); */
    /* this.users.push(new User(
      'valentina',
      'valentina@gmail.com'
      ,'23424'
    ));
    this.users.push(new User(
      'zulema',
      'zulema@gmail.com'
      ,'234234'
    ));
    this.users.push(new User(
      'nancy',
      'nancy@gmail.com'
      ,'23434234'
    )); */

    this.users = [
      new User('valentina','valentina@gmail.com','23424'),
      new User('zulema','zulema@gmail.com','234234'),
      new User('nancy','nancy@gmail.com','23434234')
    ]
    this.selectedUser = this.users[0];
  }

  ngOnInit() {
    this.usersService.getAllUsers()
    .subscribe(data => {
      console.log(data);
      this.users = data;
      this.selectedUser = this.users[0];
    });
  }

  selected(user: User){
    this.selectedUser = user;
  }

  getUser(idUser) {
    this.usersService.getUser(idUser)
    .subscribe(user => {
      this.users[0] = user;
      this.selectedUser = user;
    })
  }
}
