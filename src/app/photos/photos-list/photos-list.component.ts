import { LoadingService } from './../../shared/component/loading/loading.service';
import { PhotoService } from './../photo/photo.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = '';
  currentPage: number = 1;
  hasMore: boolean = true;
  userName: string = '';

  constructor(
    private PhotoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      params => {
        this.userName = params.userName;
        this.photos = this.activatedRoute.snapshot.data.photos;
      }
    );

  }

  load(): void{
    this.PhotoService.listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.filter = '';
      this.photos = this.photos.concat(photos);
      if(!photos.length) this.hasMore = false;
    });

  }
}
