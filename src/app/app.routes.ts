import { Routes } from '@angular/router';
import { LoginForm } from './Login/Components/login-form/login-form';
import { UsersPage } from './Users/Components/users-page/users-page';
import { authGuard } from './Shared/Guards/auth-guard';
export const routes: Routes = [
    {path : '' , redirectTo : 'login' , pathMatch : 'full'},
    {path : 'login' , component : LoginForm},
    {path : 'users' ,  component : UsersPage , canActivate : [authGuard]}
];
