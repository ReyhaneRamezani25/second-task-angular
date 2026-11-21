import { Component,Input } from '@angular/core';
import { IUser } from '../../../Shared/Models/user';
@Component({
  selector: 'app-user-table',
  imports: [],
  templateUrl: './user-table.html',
  styleUrl: './user-table.scss',
})
export class UserTable {
  @Input() role: string = '';
  @Input() users: IUser[] = [];
  @Input() selectedRole: string = 'all';

  get filteredUsers() {
    if (this.selectedRole === 'all') {
      return this.users;
    }

    return this.users.filter(u => u.role === this.selectedRole);
  }
}
