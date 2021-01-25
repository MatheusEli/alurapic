import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/component/vmessage/vmessage.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({

  declarations: [ SigninComponent ],
  imports: [ CommonModule, ReactiveFormsModule, VMessageModule, RouterModule ]
})

export class HomeModule{}
