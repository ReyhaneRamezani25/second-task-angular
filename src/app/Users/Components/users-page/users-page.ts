import { Component } from '@angular/core';
import { UsersHeader } from '../users-header/users-header';
import { UserTable } from '../user-table/user-table';
import { Users } from '../../../Shared/Services/users';
import { IUser } from '../../../Shared/Models/user';
@Component({
  selector: 'app-users-page',
  imports: [UserTable,UsersHeader],
  templateUrl: './users-page.html',
  styleUrl: './users-page.scss',
})
export class UsersPage {
  userRole: string = '';
  usersList : IUser[] = [];
  selectedRole: string = 'all';
  searchText: string = '';

  constructor(private userService: Users) {
    this.userRole = this.userService.currentUser?.role ?? '';
    this.usersList = this.userService.users;
  }
  onRoleSelected(role: string) {
    this.selectedRole = role;
  }

  onSearchChanged(value: string) {
    this.searchText = value;
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
  }

}
