import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureComponent } from './picture/picture.component';
import { HomeRouting } from './home-routing-module';
import { TextsComponent } from './texts/texts.component';
import { CallrecordingsComponent } from './callrecordings/callrecordings.component';
import { BluetoothComponent } from './bluetooth/bluetooth.component';




@NgModule({
  declarations: [PictureComponent, TextsComponent, CallrecordingsComponent, BluetoothComponent],
  imports: [
    CommonModule,
    HomeRouting

  ]
})
export class HomeModule { }
