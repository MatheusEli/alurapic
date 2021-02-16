import { environment } from './../../../environments/environment';
import { ServerLogService } from './server-log.service';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import * as StackTrace from 'stacktrace-js';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
    private serverLog: ServerLogService
  ) {}

  handleError(error: any): void {
    const location = this.injector.get(LocationStrategy);
    const url = location instanceof PathLocationStrategy ? location.path() : '';
    const user = this.injector.get(UserService);
    const router = this.injector.get(Router);
    const message = error.message ? error.message : error.toString();

    if(environment.production) router.navigate(['/error']);

    StackTrace.fromError(error).then((stackFrames) => {
      const stackAsString = stackFrames.map((sf) => sf.toString()).join('/n');
      this.serverLog
        .log({
          message,
          url,
          userName: user.getUserName(),
          stack: stackAsString,
        })
        .subscribe(
          () => console.log('Error logged on server'),
          (err) => {
            console.log(err);
            console.log('Fail to send error log to server');
          }
        );
    });
    throw error;
  }
}
