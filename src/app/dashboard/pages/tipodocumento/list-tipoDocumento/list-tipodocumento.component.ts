import { Component, OnInit, inject } from '@angular/core';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { TipodocumentoService } from '../services/tipodocumento.service';
import { TypeDocs } from '../../../../core/models/user.model';

@Component({
  selector: 'app-tipodocumento',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule],
  templateUrl: './list-tipodocumento.component.html',
  styleUrl: './list-tipodocumento.component.scss'
})
export class TipodocumentoComponent implements OnInit{
  
  public _serviceTipoDoc = inject(TipodocumentoService);
  public typeDocs: TypeDocs[] = []; 
  
  ngOnInit() {
    this.getAllTypeDocuments();
  }

  getAllTypeDocuments() {
    this._serviceTipoDoc.getAllTypeDocuments().subscribe(
      (data) => {
        this.typeDocs = data.data;
        console.log(data)
      },
      (error) => {
        console.error('Error al obtener tipos de documento', error);
      }
    );
  }

  documentos: any[] = []; // Supongamos que documentos es un array de objetos con propiedades, como "nombre".
  nuevoDocumento: string = '';

  agregarDocumento() {
    // Aquí agregarías la lógica para guardar el nuevo documento, por ejemplo, hacer una llamada al backend.
    // Luego, actualizas la lista.
    this.documentos.push({ nombre: this.nuevoDocumento });
    this.nuevoDocumento = ''; // Limpiamos el campo después de agregar.
  }



}
