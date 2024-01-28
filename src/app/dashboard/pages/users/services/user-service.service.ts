// import { IUser, userResponse } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, delay, map, throwError } from 'rxjs';
import { ApiResponse, IUser  } from '../../../../core/models/user.model';
import { computeMsgId } from '@angular/compiler';
import { environment } from '../../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _http = inject(HttpClient);

  public getAllUsers(): Observable<ApiResponse>{
    return this._http.get<ApiResponse>(`${environment.api}/usuarios`)
  }

  public getUSerById(id : number): Observable<IUser>{
    return this._http.get<IUser>(`${environment.api}/usuario/${id}`)
  }

  // public getAllUsers(): Observable<IUser[]> {
  //   return this._http.get<IUser[]>(`${this.baseURL}/usuarios`).pipe(
  //     catchError(error => {
  //       console.error('Error fetching users:', error);
  //       return throwError(error);
  //     })
  //   );
  // }

//   public getAllUsers(): Observable<IUser[]> {
//     this._http.get(`${this.baseURL}/usuarios`).subscribe( resp => {
//       console.log(resp)
//     })
    
//   }
}
