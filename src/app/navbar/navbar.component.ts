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

  title: string = 'Cencoe';
  sizeScreen: number = 790;

  menuItems = signal<MenuItem[]>(menuItems);
  collapsed = signal(false);
  widthMenuNav = computed(() => this.collapsed() ? '65px' : '250px');
  imageSize = computed(() => this.collapsed() ? '32px' : '100px');

  //^1
  @ViewChild('sidenav') sidenav!: MatSidenav;
  showMenu() {
    this.sidenav.toggle();
  }

  @HostListener('window:resize', ['$event'])
  changeWindowSize(event: Event) {
   if(window.innerWidth < this.sizeScreen){
    this.collapsed.update(value => true);
   } 
  }

  menuOpenHover(){
    this.collapsed.set(false);
  }





}



/**
 * ^1 => Instancia del elemento MatSidenav para implementar el metodo toggle()
 */