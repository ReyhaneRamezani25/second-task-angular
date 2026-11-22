import { Routes } from '@angular/router';
import { LoginForm } from './Login/Components/login-form/login-form';
import { UsersPage } from './Users/Components/users-page/users-page';
import { UserDetail } from './Users/Components/user-detail/user-detail';
import { authGuard } from './Shared/Guards/auth-guard';
import { accessDetailGuard } from './Shared/Guards/AccessDetail/access-detail-guard';
import { UserEdit } from './Users/Components/user-edit/user-edit';
import { accessEditGuard } from './Shared/Guards/AccessEdit/access-edit-guard';
export const routes: Routes = [
    {path : '' , redirectTo : 'login' , pathMatch : 'full'},
    {path : 'login' , component : LoginForm},
    {path : 'users' ,  component : UsersPage , canActivate : [authGuard]},
    {path : 'users/detail/:id' , component : UserDetail, canActivate : [authGuard,accessDetailGuard]},
    {path : 'users/edit/:id' , component : UserEdit ,  canActivate: [authGuard,accessEditGuard]}
];
