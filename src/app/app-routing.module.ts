import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { from } from 'rxjs';

const routes: Routes = [
  { path: 'home', component: HomeComponent } //pagina de inicio
  //{path: '**', component: ErrorComponent} //pagina de error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
