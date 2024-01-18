// import { IUser, userResponse } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, delay, map, throwError } from 'rxjs';
import { IUser, userResponse } from '../models/user.model';
import { computeMsgId } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _http = inject(HttpClient);
  private baseURL = 'http://localhost:8080/api/v2/cencoe'


  public getAllUsers(): Observable<userResponse>{
    return this._http.get<userResponse>(`${this.baseURL}/usuarios`)
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
