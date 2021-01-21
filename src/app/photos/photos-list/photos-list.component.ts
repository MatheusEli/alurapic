import { PhotoService } from './../photo/photo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  currentPage: number = 1;
  hasMore: boolean = true;
  userName: string = '';

  constructor(
    private PhotoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.userName = this.activatedRoute.snapshot.params.userName;
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load(): void{
    this.PhotoService.listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.photos = this.photos.concat(photos);
      if(!photos.length) this.hasMore = false;
    });

  }
}
