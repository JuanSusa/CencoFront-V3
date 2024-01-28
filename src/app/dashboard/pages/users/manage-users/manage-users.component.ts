import { Component, Inject, OnInit, booleanAttribute, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { adminPopUp } from '../../../../core/main/main-types';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/user-service.service';
import { ApiResponse } from '../../../../core/models/user.model';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.scss'
})
export class ManageUsersComponent implements OnInit {

  private readonly _matDialogRef = inject(MatDialogRef<ManageUsersComponent>);//^1
  public _serviceUser = inject(UsersService);
  // public readonly userForm: FormGroup;//^2

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: adminPopUp<number>,//^3
    private formBuilder: FormBuilder
  ) { }

  //^4
  userForm = this.formBuilder.group({
    userDocument: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern(/^\d+$/)]],
    userName: ['', Validators.required],
    userLastName: ['', Validators.required],
    userAddress: ['', [Validators.required, Validators.minLength(3)]],
    userPhone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)]],
    userPassword: ['', [Validators.required, Validators.minLength(10), this.passwordValidator]],
    userState: [''],
    userTipoDocumento: ['']
  })

  titulo: string = '';
  subtitulo: string = '';
  ngOnInit(): void {
    //^5
    const { tipo, campo } = this.data;
    this.titulo =
      this.data.tipo === 'crear' ? 'Crear nuevo usuario' : this.data.tipo === 'ver' ? 'Detalles del Usuario' : 'Editar Usuario';
    this.subtitulo =
      this.data.tipo === 'crear' ? 'Ingrese los datos para crear un nuevo usuario' : this.data.tipo === 'ver' ? 'Detalles del Usuario' : 'Ingrese los nuevos datos del usuario';
    debugger
    if (tipo === 'ver') 
      this._serviceUser
        .getUSerById(campo!)
        .subscribe((user) => console.log(user));
    
  }

  public executionMesssage() {
    this._matDialogRef.close();
  }

  //^6
  onNumericInput(event: any): void {//^6.1
    // Filtrar caracteres no numéricos
    const input = event.target.value;//^6.2
    event.target.value = input.replace(/[^0-9]/g, '');//^6.3
  }

  //^7
  passwordValidator(): ValidatorFn {//^7.1
    return (control: AbstractControl): ValidationErrors | null => {//^7.2
      const value: string = control.value;//^7.3
      const passwordCriteria = /[a-zA-Z]+.*[0-9]+.*[A-Z]+/.test(value);//^7.4

      if (!passwordCriteria) { //^7.5

        return { passwordCriteria: true };
      }
      return null;
    };
  }


}


/**
 * ^1 => Instacia del servicio MatDialogRef que recibe un objeto de tipo 'ManageUsersComponent' y la propiedad es la referencia del cuadro de dialogo (pop up)
 * ^2 => propiedad que es de tipo FormGroup utilizada para gestionar los controles del formulario.
 * ^3 => MAT_DIALOG_DATA, se usa para inyectar datos a un cuadro de dialogo
 *       public data: adminPopUp<number>, parametro del constructor que espera un objeto de tipo adminPopUp.
 * ^4 => Construccion del formulario reactivo.
 * ^5 => Asignacion de valor a titulo y subtitulo segun sea el caso del cuadro de dialogo.
 * ^6 => Metodo que filtra valores no numericos y asi en la plantilla bloquear valores alfabeticos en los inputs en donde se implemente el metodo.
 *    6.1 => nombre del metodo que recibe como parametro una propiedad event, de tipo any, se define any ya que no se determina que tipo de dato pueda recibir, y void, ya que el metodo no devuelve nada.
 *    6.2 => Se extrae el valor actual del campo (valor-entrada), y es asignado a la variable creada input.
 *    6.3 => se utliza el metodo replace() con una expresion regular -> ^: En el contexto de corchetes ([]), significa "no"; 0-9: Representa todos los dígitos del 0 al 9; /g: Realiza la sustitución de forma global, es decir, reemplaza todas las ocurrencias en la cadena.
 *           esta línea elimina todos los caracteres no numéricos del valor del campo de entrada y actualiza el campo de entrada con el nuevo valor sin caracteres no numéricos.
 * ^7 => Metodo para hacer una validacion en un campo de entrada:
 *    ^7.1 => ValidatorFn, funcion que un control y devuelve un mapa de errores si esta presente, de lo contrario null.
 *    ^7.2 => toma como argumento una propiedad de tipo AbstractControl (control); ValidationErrors | null, es el tipo de retorno (obj de error o null).
 *    ^7.3 => obtiene el valor del control (cadena del campo de entrada).
 *    ^7.4 => a 'passwordCriteria' se le asigna una expresion regular con ciertos criterios; 'test(value)', verifica que el valor del campo cumpla con esos criterios.
 *    ^7.5 => condicion que verifica si 'passwordCriteria' es false, quiere decir que no cumple con los criterios y retorna un obj de errores
 */