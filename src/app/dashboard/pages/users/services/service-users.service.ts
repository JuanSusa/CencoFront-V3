// import { IUser, userResponse } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsersService {

  private _http = inject(HttpClient);
  private baseURL = 'http://localhost:8080/api/v2/cencoe'

  constructor() { }

  // public getAllUsers(): Observable<IUser[]> {
  //   return this._http.get<IUser[]>(`${this.baseURL}/usuarios`).pipe(
  //     catchError(error => {
  //       console.error('Error fetching users:', error);
  //       return throwError(error);
  //     })
  //   );
  // }

  // public getAllUsers(): Observable<IUser[]>{
  //   return this._http.get(`${this.baseURL}/usuarios`).pipe(
  //     map(response => response as IUser[])
  //   );
  // }
}
