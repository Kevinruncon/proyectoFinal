import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccessService } from '../services/access.service';

export const detailAccessGuard: CanActivateFn = () => {
  const accessService = inject(AccessService);
  const router = inject(Router);

  if (accessService.detailAccessAllowed()) {
    return true;
  }

  return router.createUrlTree(['/acceso'], {
    queryParams: { protegido: 'personajes' }
  });
};
