import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../../Shared/Services/users';
import { IUser } from '../../../Shared/Models/user';


@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {
  user : IUser | undefined;
  constructor(private userService : Users,private route : ActivatedRoute){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.users.find(u => u.id === id);
  }

}
