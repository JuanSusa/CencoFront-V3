import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ListUsersComponent } from './dashboard/pages/users/list-users/list-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'inicio',
        loadComponent: () => import('./dashboard/dashboard.component').then((c) => c.DashboardComponent),

        children: [
            {
                path: 'usuarios',
                loadComponent: () => import('./dashboard/pages/users/list-users/list-users.component').then((c) => c.ListUsersComponent)

            },
            {
                path: 'campañas',
                loadComponent: () => import('./dashboard/pages/campaigns/campaigns.component').then((c) => c.CampaignsComponent)

            },
            {
                path: 'proveedores',
                loadComponent: () => import('./dashboard/pages/providers/providers.component').then((c) => c.ProvidersComponent)

            },
            {
                path: 'tipo-documento',
                loadComponent: () => import('./dashboard/pages/tipodocumento/tipodocumento.component').then((c) => c.TipodocumentoComponent)

            },

        ]

    },
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'inicio'
    }
];
