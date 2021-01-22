import { DarkenOnHover } from './../../shared/directive/darken-on-hover/darken-on-hover.module';
import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BotaoComponent } from './botao/botao.component';
import { filterByDescription } from './filter-by-description.pipe';
import { PhotosListComponent } from './photos-list.component';
import { PhotosComponent } from './photos/photos.component';
import { CardModule } from 'src/app/shared/component/card/card.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    PhotosComponent,
    PhotosListComponent,
    filterByDescription,
    BotaoComponent,
    SearchComponent
  ],
  imports: [CommonModule, PhotoModule, CardModule, DarkenOnHover]
})
export class PhotosListModule { }
