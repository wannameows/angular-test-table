import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/user/user.service';
import { User } from '../shared/user/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(
    private user: UserService
  ) { }

  getUserList(): void {
    this.user.getUserList().toPromise().then(users => {
      this.users = users;
    });
  }

  ngOnInit() {
    this.getUserList();
  }

}
