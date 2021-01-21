import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BotaoComponent } from './botao/botao.component';
import { filterByDescription } from './filter-by-description.pipe';
import { PhotosListComponent } from './photos-list.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    PhotosComponent,
    PhotosListComponent,
    filterByDescription,
    BotaoComponent
  ],
  imports: [CommonModule, PhotoModule]
})
export class PhotosListModule { }
