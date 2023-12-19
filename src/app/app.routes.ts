import { Routes } from '@angular/router';
import { MainScreentableComponent } from '../features/main-screentable/main-screentable.component';

export const routes: Routes = [
  {
    path: '',
    component: MainScreentableComponent,
    pathMatch: 'full',
  },
];
