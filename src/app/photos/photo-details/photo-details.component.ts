import { UserService } from './../../core/user/user.service';
import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/shared/component/alert/alert.service';

@Component({
  templateUrl: 'photo-details.component.html',
  styleUrls: ['photo-details.component.scss'],
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;
  photoId: number;
  constructor(
    private alertService: AlertService,
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(
      () => {},
      (err) => this.router.navigate(['/not-found'])
    );
  }

  remove(): void {
    this.photoService.removePhoto(this.photoId).subscribe(
      () => {
        this.alertService.success('Photo removed!', true);
        this.router.navigate(['/users', this.userService.getUserName()], { replaceUrl: true});
      },
      (err) => {
        console.log(err);
        this.alertService.warning('Could not delete the photo!');
      }
    );
  }

  like(photo: Photo): void {
    this.photoService.like(photo.id).subscribe((liked) => {
      if (liked) {
        this.photo$ = this.photoService.findById(photo.id);
      }
    });
  }
}
