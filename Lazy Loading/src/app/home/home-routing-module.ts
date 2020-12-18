import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BluetoothComponent } from './bluetooth/bluetooth.component';
import { CallrecordingsComponent } from './callrecordings/callrecordings.component';
import { PictureComponent } from './picture/picture.component';
import { TextsComponent } from './texts/texts.component';


const routes: Routes = [
  {path:'',component:PictureComponent},
  {path:'text', component:TextsComponent},
  {path: 'recordings',component: CallrecordingsComponent},
  {path: 'bluetooth', component: BluetoothComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouting { }
