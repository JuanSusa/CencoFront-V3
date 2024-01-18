import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


//Angular material
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { routes } from '../app.routes';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AngularMaterialModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  title: string = 'Cencoe'

  usuariosPanelOpened = false;
  panelOpenState = false;

  toggleUsuariosPanel() {
    this.usuariosPanelOpened = !this.usuariosPanelOpened;
  }

  // public menuItems = routes
  //   .map((route) => [route, ...(route.children ?? [])])//^1
  //   .flat()//^ 2
  //   .filter((route) => route && route.path);//^3




  // getIconItemMenu(index: number): string {
  //   const icons = ['dashboard', 'campaign', 'group', 'group'];
  //   return icons[index];

  // }


}



/*COMENTARIOS
^1 => mapeo sobre cada ruta, y de ahi se crea un nuevo array,
        (...), operador de propagacion, crea un nuevo array que contiene la ruta principal y sus hijos

^2 => aplana el array de arrays y lo convierte en un solo array

^3 => filtra las rutas que no son nulas y las que tiene una propiedad 'path'

*/