import { UsersService, } from '../services/user-service.service';
import { ApiResponse, IUser, } from '../../../../core/models/user.model';
import { Component, OnInit, inject } from '@angular/core';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { adminTypePopUp } from '../../../../core/main/main-types';
import { ManageUsersComponent } from '../manage-users/manage-users.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule, RouterLink],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent implements OnInit {

  public _serviceUser = inject(UsersService)
  public user: IUser[] = [];//^1
  public displayedColumns = ['userId', 'name', 'direccion', 'email', 'edit'];//^2
  public isLoading = true; // Bandera para mostrar mensaje de carga
  public hasError = false; // Bandera para mostrar mensaje de error
  private readonly _dialog = inject(MatDialog)




  ngOnInit(): void {
    this._serviceUser.getAllUsers().subscribe({
      next: (data: ApiResponse) => {
        this.user = data.data;
        this.isLoading = false; // Desactivar la bandera de carga
        console.log(data)
      },
      error: (error) => {
        console.error('Error al obtener usuarios:', error);
        this.user = []
      },
    })
  }

  manageUser(tipo: adminTypePopUp, userId?: number) {
    const modal = this._dialog.open(ManageUsersComponent, {
      data: { tipo, campo: userId }
    });

    modal
      .afterClosed()
      .subscribe(result => {
        console.log('se cerro el dialogo ')
      });

  }


}


/**
 * ^1 => Inyeccion de datos usuarios
 * ^2 => arreglo que define las columnas de la tabla en la vista
 */