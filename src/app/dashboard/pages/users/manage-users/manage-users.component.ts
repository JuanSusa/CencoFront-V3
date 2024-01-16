import { Component, Inject, OnInit, booleanAttribute, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { adminPopUp } from '../../../main/main-types';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.scss'
})
export class ManageUsersComponent implements OnInit {

  private readonly _matDialogRef = inject(MatDialogRef<ManageUsersComponent>);//^1
  public readonly userForm: FormGroup;//^2
  private customPattern: RegExp = /^(?=.*[A-Z])[a-zA-Z0-9]+$/;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: adminPopUp<number>,//^3
    formBuilder :  FormBuilder
  ) { 
    this.userForm = formBuilder.group({
      userDocument: ['', [Validators.required, Validators.min(1), Validators.maxLength(11), Validators.pattern(/^[0-9]+$/)]],
      userName: ['', Validators.required],
      userLastName: ['', Validators.required],
      userAddress: ['', [Validators.required, Validators.minLength(3)]],
      userPhone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      userPassword: ['', [Validators.required, Validators.minLength(10), Validators.pattern(this.customPattern)]],
      userState: [''],
      userTipoDocumento: ['']

    })
  }

  titulo: string = '';
  subtitulo: string = '';
  ngOnInit(): void {

    const tipo   = this.data;
    this.titulo = this.data.tipo == 'crear' ? 'Crear nuevo usuario' : 'Editar Usuario';
    this.subtitulo =
      this.data.tipo == 'crear'
        ? 'Ingrese los datos para crear un nuevo usuario'
        : 'Ingrese los nuevos datos del usuario';
  }

  public executionMesssage() {
    this._matDialogRef.close();
  }

}


/**
 * ^1 => Instacia del servicio MatDialogRef que recibe un objeto de tipo 'ManageUsersComponent' y la propiedad es la referencia del cuadro de dialogo (pop up)
 * ^2 => propiedad que es de tipo FormGroup utilizada para gestionar los controles del formulario.
 * ^3 => MAT_DIALOG_DATA, se usa para inyectar datos a un cuadro de dialogo
 *       public data: adminPopUp<number>, parametro del constructor que espera un objeto de tipo adminPopUp.
 */