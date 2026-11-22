import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../../Shared/Services/users';
import { IUser } from '../../../Shared/Models/user';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-edit',
  imports: [FormsModule],
  templateUrl: './user-edit.html',
  styleUrl: './user-edit.scss',
})
export class UserEdit {
  user : IUser | undefined;
  constructor(private userService : Users , private router : ActivatedRoute , private changeRoute : Router){
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.user = this.userService.users.find(u => u.id===id);
  }

  saveUser() {
  if (!this.user) return;

    this.userService.updateUser(this.user);
    this.changeRoute.navigate(['./users']);
  }

}
