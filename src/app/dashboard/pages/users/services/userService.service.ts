// import { IUser, userResponse } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, delay, map, throwError } from 'rxjs';
import { IUser, userResponse } from '../models/user.model';
import { computeMsgId } from '@angular/compiler';

interface State{
  users: IUser[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _http = inject(HttpClient);
  private baseURL = 'http://localhost:8080/api/v2/cencoe'

  #state = signal<State>({
    loading: true,
    users: []
  });

  public users = computed( () => this.#state().users);
  public loading = computed( () => this.#state().loading);


  constructor() {

    this._http.get<userResponse>(`${this.baseURL}/usuarios`)
    .pipe(delay(1500))
    .subscribe( res => {
      this.#state.set({
        loading: false,
        users : res.data
      })

    });
   }









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
