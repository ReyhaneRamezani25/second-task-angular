import { Component,EventEmitter,Input, Output } from '@angular/core';
import { IUser } from '../../../Shared/Models/user';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-table',
  imports: [RouterLink],
  templateUrl: './user-table.html',
  styleUrl: './user-table.scss',
})
export class UserTable {
  @Input() role: string = '';
  @Input() users: IUser[] = [];
  @Input() selectedRole: string = 'all';
  @Input() searchText: string = '';

  @Output() deletedId = new EventEmitter<number>();

  sendDeletedId(id : number){
    this.deletedId.emit(id);
  }

 get filteredUsers() {
  const search = this.searchText.toLowerCase().trim();

  return this.users.filter(user => {
    const matchesRole =
      this.selectedRole === 'all' || user.role === this.selectedRole;

    const matchesStatus =
      search === 'فعال'
        ? user.status === true
        : search === 'غیرفعال'
          ? user.status === false
          : (user.status ? 'active' : 'inactive').includes(search);

    const matchesSearch =
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.role.toLowerCase().includes(search) ||
      user.id.toString().includes(search) ||
      matchesStatus ||
      (user.role === 'admin'
        ? 'مدیر سیستم'
        : user.role === 'user'
          ? 'کاربر عادی'
          : 'اپراتور'
      ).includes(search);

      return matchesRole && matchesSearch;
    });
  }
}
