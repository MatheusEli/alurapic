import { PhotoService } from '../photo/photo.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from '../photo/photo';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class Resolver implements Resolve<Observable<Photo[]>>{

  constructor(private photoService: PhotoService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
      const userName = route.params.userName;
      return this.photoService.listFromUserPaginated(userName, 1);
  }

}
