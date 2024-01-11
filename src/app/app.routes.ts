import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './navbar/pages/users/users.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadComponent: () => import('./navbar/navbar.component').then((c)=>c.NavbarComponent),
        children:[
            {
                path:'usuarios',
                loadComponent: () => import('./navbar/pages/users/users.component').then((c) => c.UsersComponent)
            }
        ]  

    }
];
