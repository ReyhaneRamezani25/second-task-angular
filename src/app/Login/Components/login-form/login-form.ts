import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Users } from '../../../Shared/Services/users';
import { IUser } from '../../../Shared/Models/user';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login-form',
  imports: [FormsModule,RouterLink],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
  email : string = "";
  password : string ="";
  constructor(private userService : Users , private router : Router){}
  resultAfterCheck : string ="";
  currentUser : IUser | null = null;
  checkEmailAndPass() {
    if(this.email.trim()==="" && this.password.trim()===""){
      this.resultAfterCheck = "لطفاً ایمیل و رمز عبور خود را وارد کنید";
    }
    else if(this.email.trim()===""){
      this.resultAfterCheck = "لطفاً ایمیل خود را وارد کنید";
    }
    else if(this.password.trim()===""){
      this.resultAfterCheck = "لطفاً رمز عبور خود را وارد کنید";
    }
    else {
      const user = this.userService.users.find(u => u.email===this.email && u.password===this.password);
      if(user && user.status){
        this.currentUser = user;  
        this.resultAfterCheck = "";
        this.userService.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.router.navigate(['/users']);
      }
      else if (user && !user.status){
        this.resultAfterCheck = "حساب کاربری شما غیرفعال است";
      }
      else {
        this.resultAfterCheck =  "ایمیل یا رمز عبور اشتباه است";
      }
    }

  }

}
