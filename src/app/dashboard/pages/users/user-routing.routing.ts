import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './list-users/users.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {path:'usuarios', component: UsersComponent},
      {path:'**', redirectTo:'usuarios'}
    ]
  },
];

export const UserRoutingRoutes = RouterModule.forChild(routes);
