import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/component/vmessage/vmessage.module';
import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

@NgModule({

  declarations: [ SigninComponent, SignUpComponent ],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule, VMessageModule, RouterModule ]
})

export class HomeModule{}
