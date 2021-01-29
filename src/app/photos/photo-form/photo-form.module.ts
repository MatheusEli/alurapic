import { PhotoFormComponent } from './photo-form.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from 'src/app/shared/component/vmessage/vmessage.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';
import { ImmediateClickModule } from 'src/app/shared/directive/immediate-click/immediate-click.module';

@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    FormsModule,
    RouterModule,
    PhotoModule,
    ImmediateClickModule
  ]
})
export class PhotoFormModule{}
