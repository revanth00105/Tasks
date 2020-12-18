import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HalfdisplayComponent } from './halfdisplay/halfdisplay.component';
// import { MenuComponent } from './menu/menu.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  {path:'menu',loadChildren:()=>import('./menu/menu-routin').then(m=>m.MenuModule)},
  {path:'halfdispaly',component:HalfdisplayComponent},
  {path:'terms',component:TermsComponent},
  {path:'conditions',component:ConditionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
