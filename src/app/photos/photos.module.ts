import { PhotoDetailsModule } from './photo-details/photo-details.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotosListModule } from './photos-list/photos-list.module';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
  imports: [
    PhotosListModule,
    PhotoFormModule,
    CommonModule,
    PhotoDetailsModule
  ]
})

export class PhotosModule { }
