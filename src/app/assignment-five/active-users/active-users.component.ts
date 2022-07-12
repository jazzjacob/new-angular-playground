import { Component } from '@angular/core';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: []
})
export class ActiveUsersComponent {
  users: string[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }

  ngDoCheck() {
    //console.log('Active users: ' + this.users);
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
