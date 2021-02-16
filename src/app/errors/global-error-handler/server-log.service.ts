import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServerLog } from './server-log';
import { Injectable } from '@angular/core';


const API = environment.ServerLog;
@Injectable({
  providedIn: 'root'
})
export class ServerLogService{

  constructor(private http: HttpClient){}
  log(serverLog: ServerLog){

    return this.http.post(API+'infra/log', serverLog);
  }

}
