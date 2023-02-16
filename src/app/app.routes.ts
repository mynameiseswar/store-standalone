import { Route } from '@angular/router';
import { BaseAppComponent } from './pages/base-app/base-app.component';
import { LoginComponent } from './pages/login/login.component';

export const APP_ROUTE: Route[] = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'app',
    //component: BaseAppComponent,
    loadComponent: () => import('./pages/base-app/base-app.component').then((c) => c.BaseAppComponent),
    loadChildren: () => import('./pages/base-app/base-app.routes')
  }
];


