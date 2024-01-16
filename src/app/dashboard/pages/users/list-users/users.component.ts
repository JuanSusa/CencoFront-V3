import { ServiceUsersService } from '../services/service-users.service';
import { IUser } from '../models/user.model';
import { Component, OnInit, inject } from '@angular/core';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { adminTypePopUp } from '../../../main/main-types';
import { ManageUsersComponent } from '../manage-users/manage-users.component';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  private _serviceUser =inject(ServiceUsersService)
  public users: IUser[] = [];//^1
  public displayedColumns = ['userId', 'name', 'direccion','email','edit'];//^2
  public isLoading = true; // Bandera para mostrar mensaje de carga
  public hasError = false; // Bandera para mostrar mensaje de error
  private readonly _dialog = inject(MatDialog)

  ngOnInit(): void {
    // this._serviceUser.getAllUsers().subscribe(
    //   (data: IUser[]) => {
    //     this.users = data;
    //     this.isLoading = false; // Desactivar la bandera de carga
    //   },
    //   (error) => {
    //     console.error(error);
    //     this.isLoading = false;
    //     this.hasError = true; // Activar la bandera de error
    //   }
    // );
  }

  manageUser(tipo: adminTypePopUp, userId?: number){
    const modal = this._dialog.open(ManageUsersComponent, {
      data: {tipo, campo: userId}
    });

    modal
    .afterClosed()
    .subscribe( result => {
      console.log('se cerro el dialogo ')
    });

  }


}


/**
 * ^1 => Inyeccion de datos usuarios
 * ^2 => arreglo que define las columnas de la tabla en la vista
 */