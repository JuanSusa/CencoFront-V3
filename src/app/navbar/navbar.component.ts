import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


//Angular material
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { routes } from '../app.routes';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AngularMaterialModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  title: string = 'Cencoe'

  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path);


  getIconItemMenu(index: number): string {

    const icons = ['dashboard', 'campaign', 'group', 'group'];
    return icons[index] || 'default-icon';

  }


}
