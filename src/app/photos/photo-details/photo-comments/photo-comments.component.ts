import { switchMap, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from './../../photo/photo.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo-comment';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.scss']
})
export class PhotoCommentsComponent implements OnInit {
  @Input() photoId: number;
  comments$: Observable<PhotoComment[]>;
  commentsForm: FormGroup;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentsForm = this.formBuilder.group({
      comment: ['', [Validators.required, Validators.maxLength(300)]],
    });
  }

  save(): void {
    this.comments$ = this.photoService
      .addComment(this.photoId, this.commentsForm.get('comment')?.value as string)
      .pipe(
        switchMap(() => this.photoService.getComments(this.photoId)),
        tap(() => this.commentsForm.reset)
      );
  }
}
