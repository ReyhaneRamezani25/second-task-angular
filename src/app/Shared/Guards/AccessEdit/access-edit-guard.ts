import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Users } from '../../Services/users';
export const accessEditGuard: CanActivateFn = (route, state) => {
  const userService = inject(Users);
  const router = inject(Router);
  console.log('Current Role:', userService.currentUser?.role);
  if(userService.currentUser?.role==='admin'){
    return true;
  }
  return router.createUrlTree(['/users']);
};
