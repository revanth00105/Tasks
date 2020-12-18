import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingComponent } from './housing/housing.component';
import { LaundryingComponent } from './laundrying/laundrying.component';
import { WashingComponent } from './washing/washing.component';
import { GuestRouting } from './guest-routing-module';



@NgModule({
  declarations: [HousingComponent, LaundryingComponent, WashingComponent],
  imports: [
    CommonModule,
    GuestRouting
  ]
})
export class GuestModule { }
