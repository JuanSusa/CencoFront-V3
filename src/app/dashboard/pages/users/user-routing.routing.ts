import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './list-users/users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path:'usuarios', component: UsersComponent},
      {path:'**', redirectTo:'usuarios'}
    ]
  },
];

export const UserRoutingRoutes = RouterModule.forChild(routes);
