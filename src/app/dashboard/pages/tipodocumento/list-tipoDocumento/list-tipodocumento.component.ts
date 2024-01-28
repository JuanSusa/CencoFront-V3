import { Component, OnInit, inject } from '@angular/core';
import { AngularMaterialModule } from '../../../../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { TipodocumentoService } from '../services/tipodocumento.service';
import { TypeDocs } from '../../../../core/models/user.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipodocumento',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule, ReactiveFormsModule],
  templateUrl: './list-tipodocumento.component.html',
  styleUrl: './list-tipodocumento.component.scss'
})
export class TipodocumentoComponent implements OnInit{
  
  public _serviceTipoDoc = inject(TipodocumentoService);
  public typeDocs: TypeDocs[] = []; 

  constructor(
    private formBuilder: FormBuilder
  ){}

  typeDocForm = this.formBuilder.group({
    docTypeName: ['', Validators.required]
  })
  
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

  
  



}
