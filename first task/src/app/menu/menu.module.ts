import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogFormComponent } from './log-form/log-form.component';
import {  MenuModule} from './menu-routin';
import { TermsComponent } from './terms/terms.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ LogFormComponent, TermsComponent, ConditionsComponent, MenuComponent],
  imports: [
    CommonModule,
    MenuModule,
    FormsModule
  ]
})
export class HomeModule { }

