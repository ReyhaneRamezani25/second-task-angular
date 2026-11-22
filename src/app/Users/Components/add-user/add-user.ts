import { Component } from '@angular/core';
import { Users } from '../../../Shared/Services/users';
import { IUser } from '../../../Shared/Models/user';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss',
})
export class AddUser {
  newUser: IUser;
  constructor(private userService : Users , private router : Router){
   this.newUser = {
   id: this.userService.users.length + 1,
   name: '',
   email: '',
   password: '',
   role: 'user',
   status: true,
   salary: 0,
   position: ''
   };
  }

  saveUser(){
    this.userService.addUser(this.newUser);
    this.router.navigate(['/users'])
  }

}
