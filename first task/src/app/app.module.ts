import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HalfdisplayComponent } from './halfdisplay/halfdisplay.component';
import { LogFormComponent } from './menu/log-form/log-form.component';
import { FormsModule } from '@angular/forms';
import { ConditionsComponent } from './conditions/conditions.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HalfdisplayComponent,
    LogFormComponent,
    ConditionsComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
