import { CanActivateFn } from '@angular/router';

export const judoGuard: CanActivateFn = (route, state) => {
  return true;
};
