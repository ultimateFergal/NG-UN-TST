import { Component, OnInit } from '@angular/core';

import { User } from '../user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // user: User;
  users: User[] = [];
  selectedUser: User;

  constructor() { 
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
  }

  ngOnInit() {
  }

  selected(user: User){
    this.selectedUser = user;
  }
}
