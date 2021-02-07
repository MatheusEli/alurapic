import { ShowIfLoggedModule } from './show-if-logged/show-if-logged.module';
import { VMessageModule } from 'src/app/shared/component/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';
import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';

@NgModule({
  declarations: [PhotoDetailsComponent, PhotoCommentsComponent, PhotoOwnerOnlyDirective],
  exports: [PhotoDetailsComponent],
  imports: [CommonModule, PhotoModule, RouterModule, ReactiveFormsModule, VMessageModule, ShowIfLoggedModule]
})
export class PhotoDetailsModule{}
