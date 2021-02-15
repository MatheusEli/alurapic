import { MenuModule } from './../shared/component/menu/menu.module';
import { LoadingModule } from './../shared/component/loading/loading.module';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule } from '../shared/component/alert/alert.module';
import { RequestInterceptor } from './auth/request.interceptor';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ShowIfLoggedModule } from '../photos/photo-details/show-if-logged/show-if-logged.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  imports: [CommonModule,RouterModule, AlertModule, LoadingModule, MenuModule, ShowIfLoggedModule],
  providers: [{

    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }]
})
export class CoreModule{}
