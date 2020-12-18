import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousingComponent } from './housing/housing.component';
import { LaundryingComponent } from './laundrying/laundrying.component';
import { WashingComponent } from './washing/washing.component';


const routes: Routes = [
  {path:"",redirectTo:'/login',pathMatch:"full"},
  {path:"housing",component:HousingComponent},
  {path:"laundrying",component:LaundryingComponent},
  {path:"washing",component:WashingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRouting { }
