import { Injectable, inject } from '@angular/core';
import { ApiResponse } from '../../../../core/models/user.model';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {

  private _http = inject(HttpClient);

  public getAllTypeDocuments(): Observable<ApiResponse>{
    return this._http.get<ApiResponse>(`${environment.api}/tipos-documento`)
  }
}
