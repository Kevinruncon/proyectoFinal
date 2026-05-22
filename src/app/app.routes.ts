import { Routes } from '@angular/router';
import { detailAccessGuard } from './core/guards/detail-access.guard';
import { AccessComponent } from './features/access/access.component';
import { HomeComponent } from './features/home/home.component';
import { PeopleDetailComponent } from './features/people-detail/people-detail.component';
import { PeopleListComponent } from './features/people-list/people-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio | SWAPI Angular' },
  { path: 'personajes', component: PeopleListComponent, title: 'Personajes | SWAPI Angular' },
  {
    path: 'personajes/:id',
    component: PeopleDetailComponent,
    canActivate: [detailAccessGuard],
    title: 'Detalle | SWAPI Angular'
  },
  { path: 'acceso', component: AccessComponent, title: 'Acceso | SWAPI Angular' },
  { path: '**', redirectTo: '' }
];
