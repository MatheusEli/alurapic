  import { Injectable } from '@angular/core';
  import { BehaviorSubject, Observable, Subject } from 'rxjs';
  import { TokenService } from '../token/token.service';
  import { User } from './user';

  const jwt_decode = require('jwt-decode');

  @Injectable({
    providedIn: 'root'
  })
  export class UserService{

    private userSubject = new BehaviorSubject<User>(null);
    private userName:string;
    constructor(private tokenService: TokenService){

      this.tokenService.hasToken() &&
      this.decodeAndNotify();
    }

    setToken(token:string) :void{
      this.tokenService.setToken(token);
      this.decodeAndNotify();
    }

    private decodeAndNotify(): void{
      const token = this.tokenService.getToken();
      const user:User = jwt_decode(token) as User;
      this.userName = user.name;
      this.userSubject.next(user);
    }

    getUser(): Observable<User>{
      return this.userSubject.asObservable();
    }

    logout(): void{

      this.tokenService.removeToken();
      this.userSubject.next(null);
    }

    isLogged(): boolean{
      return this.tokenService.hasToken();
    }

    getUserName(): string{
      return this.userName;
    }
  }
