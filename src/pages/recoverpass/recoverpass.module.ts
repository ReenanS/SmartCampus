import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecoverpassPage } from './recoverpass';

@NgModule({
  declarations: [
    RecoverpassPage,
  ],
  imports: [
    IonicPageModule.forChild(RecoverpassPage),
  ],
  exports: [
    RecoverpassPage
  ]
})
export class RecoverpassPageModule {}
