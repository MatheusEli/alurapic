import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from './new-user';

const API = environment.API
@Injectable()
export class SignUpService{

  constructor(private http: HttpClient){}

  checkUserNameTaken(userName: string): Observable<any>{
    return this.http.get(API+'user/exists/'+userName);
  }

  signUp(newUser: NewUser): Observable<any>{
    return this.http.post(API+'user/signup/',newUser);
  }
}
