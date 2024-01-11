import { Routes } from '@angular/router';
import { MainScreentableComponent } from '../features/main-screentable/main-screentable.component';
import { AuthComponent } from '../features/auth/auth.component';
import { EmptyRouteComponent } from '../features/empty-route/empty-route.component';

export const routes: Routes = [
  {
    path: 'work-space',
    component: MainScreentableComponent
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth'
  },
  {
    path: '**',
    component: EmptyRouteComponent
  },
];
