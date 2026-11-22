import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Users } from '../Services/users';
export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(Users);
  const router = inject(Router);
  console.log('Current User:', userService.currentUser);
  if(userService.currentUser) {
    return true;
  }
   return router.createUrlTree(['/login']);
};
