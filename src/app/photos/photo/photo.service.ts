import { environment } from './../../../environments/environment';
import { PhotoComment } from './photo-comment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

import { Photo } from './photo';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private API = environment.API;
  constructor(private http: HttpClient) {}

  listFromUser(userName: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.API + userName + '/photos');
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<Photo[]>(this.API + '' + userName + '/photos', {
      params: params,
    });
  }

  upLoad(
    description: string,
    allowComments: boolean,
    arquivo: File
  ): Observable<any> {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', arquivo);
    return this.http.post(this.API + 'photos/upload', formData, {
      observe: 'events',
      reportProgress: true,
    });
  }

  findById(id: number): Observable<Photo> {
    return this.http.get<Photo>(this.API + 'photos/' + id);
  }

  getComments(id: number): Observable<PhotoComment[]> {
    return this.http.get<PhotoComment[]>(
      this.API + 'photos/' + id + '/comments'
    );
  }

  addComment(id: number, commentText: string): Observable<Object> {
    return this.http.post(this.API + 'photos/' + id + '/comments', {
      commentText,
    });
  }

  removePhoto(id: number): Observable<Object> {
    return this.http.delete(this.API + 'photos/' + id);
  }

  like(photoId: number): Observable<boolean> {
    return this.http
      .post(
        this.API + 'photos/' + photoId + '/like',
        {},
        { observe: 'response' }
      )
      .pipe(map((res) => true))
      .pipe(
        catchError((err) => {
          return err.status == '304' ? of(false) : throwError(err);
        })
      );
  }
}
