import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { Resolver } from './photos/photos-list/photos-list.resolver';
import { SigninComponent } from './home/signin/signin.component';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path:'users/:userName', component: PhotosListComponent, resolve: {photos: Resolver}},
  {path: 'p/add', component: PhotoFormComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
