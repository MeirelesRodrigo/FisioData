import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const isAuthenticated = localStorage.getItem('auth') === 'true'; // Verifica o login

  if (!isAuthenticated) {
    router.navigate(['']); // Redireciona para login
    return false;
  }

  return true;
};
