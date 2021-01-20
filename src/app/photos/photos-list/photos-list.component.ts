import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName;
      this.photoService.listFromUser(userName)
        .subscribe(
          photos => this.photos = photos,
          err => console.log(err.message)
        );
  }
}
