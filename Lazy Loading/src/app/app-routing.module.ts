import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",redirectTo:'/login',pathMatch:"full"},
  {path:'home', loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'guest', loadChildren:()=>import('./guest/guest.module').then(m=>m.GuestModule)},
  {path:'login', component: LoginComponent, data : {some_data: 'somevalue' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
