import { Component, signal } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { MenuDataItem, menuDataItems } from './menuside-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [AngularMaterialModule, RouterModule, CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  title: string = 'Cencoe'
  usuariosPanelOpened = false;

  menuItems = signal<MenuDataItem[]>(menuDataItems);

  showSubmenu() {
    this.usuariosPanelOpened = !this.usuariosPanelOpened;
  }

}
