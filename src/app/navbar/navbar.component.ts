import { Component, HostListener, ViewChild, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


//Angular material
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MenuItem, menuItems } from './menu-data';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AngularMaterialModule, RouterModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  title: string = 'Cencoe'

  menuItems = signal<MenuItem[]>(menuItems);
  
  collapsed = signal(false);
  widthMenuNav = computed(() => this.collapsed() ? '65px' : '250px');
  imageSize = computed(() => this.collapsed() ? '32px' : '100px');

  @ViewChild('sidenav') sidenav!: MatSidenav;

  ngAfterViewInit() {
    // La referencia al sidenav está disponible aquí
    console.log(this.sidenav);
  }




  // usuariosPanelOpened = false;
  // panelOpenState = false;
  // closedMenu = false;

  // showSubmenu() {
  //   this.usuariosPanelOpened = !this.usuariosPanelOpened;
  // }

  showMenu(){
    this.sidenav.toggle();
  }

  

    // @ViewChild(MatDrawer) drawer!: MatDrawer;
    // private screenSizeThreshold = 768; 

    // @HostListener('window:resize', ['$event'])
    // onResize(event: Event) {
    //   if (window.innerWidth < this.screenSizeThreshold) {

    //     this.drawer.close();
    //   }
    // }

  }



/*COMENTARIOS
^1 => mapeo sobre cada ruta, y de ahi se crea un nuevo array,
        (...), operador de propagacion, crea un nuevo array que contiene la ruta principal y sus hijos

^2 => aplana el array de arrays y lo convierte en un solo array

^3 => filtra las rutas que no son nulas y las que tiene una propiedad 'path'

*/