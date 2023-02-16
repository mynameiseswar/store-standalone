import { Route } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { UsermanagementComponent } from "../usermanagement/usermanagement.component";
import { BaseAppComponent } from "./base-app.component";

export default [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        // component: DashboardComponent
        loadComponent: () => import('../dashboard/dashboard.component').then((c) => c.DashboardComponent)
    },
    {
        path: 'user-management',
        // component: UsermanagementComponent
        loadComponent: () => import('../usermanagement/usermanagement.component').then((c) => c.UsermanagementComponent)
    }


] as Route[];