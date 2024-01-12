import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './dashboard/pages/users/users.component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./dashboard/dashboard.component').then((c)=>c.DashboardComponent),
        children:[
            {
                path:'campañas',
                title: 'Campañas',
                loadComponent: () => import('./dashboard/pages/campaigns/campaigns.component').then((c) => c.CampaignsComponent)
            },
            {
                path:'clientes',
                title: 'Clientes',
                loadComponent: () => import('./dashboard/pages/customers/customers.component').then((c) => c.CustomersComponent)
            },
            {
                path:'usuarios',
                title: 'Usuarios',
                loadComponent: () => import('./dashboard/pages/users/users.component').then((c) => c.UsersComponent)
            },
            {
                path:'proveedores',
                title: 'Proveedores',
                loadComponent: () => import('./dashboard/pages/providers/providers.component').then((c) => c.ProvidersComponent)
            }
            
        ]  

    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo:'home'
    }
];
