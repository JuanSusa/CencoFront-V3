import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


//Angular material
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AngularMaterialModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  title: string= 'Cencoe'

}
