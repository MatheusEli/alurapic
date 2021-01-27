import { Injectable } from '@angular/core';


const KEY = 'authToken';
@Injectable({
  providedIn: 'root'
})
export class TokenService{

  hasToken(): boolean{
    return !!this.getToken();
  }

  getToken() : string | null{
    return window.localStorage.getItem(KEY);
  }

  setToken(token: string): void{
    window.localStorage.setItem(KEY, token);
  }

  removeToken(): void{
    window.localStorage.removeItem(KEY);
  }
}
