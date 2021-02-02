import { VMessageModule } from 'src/app/shared/component/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
  declarations: [PhotoDetailsComponent, PhotoCommentsComponent],
  exports: [PhotoDetailsComponent],
  imports: [CommonModule, PhotoModule, RouterModule, ReactiveFormsModule, VMessageModule]
})
export class PhotoDetailsModule{}
