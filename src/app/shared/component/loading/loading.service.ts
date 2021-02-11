import { LoadingType } from './loading-type';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService{
  loadingSubject = new Subject<LoadingType>();
  getLoading(): Observable<any>{
    return this.loadingSubject.asObservable().pipe(startWith(LoadingType.STOPPED));
  }
  start(): void{
    this.loadingSubject.next(LoadingType.LOADING);
  }
  stop():void{
    this.loadingSubject.next(LoadingType.STOPPED);
  }
}
