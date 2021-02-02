import { PhotoComment } from './photo-comment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Photo } from './photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private API = 'http://localhost:3000/';
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
    return this.http.post(this.API + 'photos/upload', formData);
  }

  findById(id: number): Observable<Photo>{
    return this.http.get<Photo>(this.API+ 'photos/' +id);
  }

  getComments(id: number): Observable<PhotoComment[]>{
    return this.http.get<PhotoComment[]>(this.API+'photos/'+id+'/comments');
  }

  addComment(id:number, commentText:string): Observable<Object>{

    return this.http.post(this.API + 'photos/' + id + '/comments', {commentText});
  }
}
