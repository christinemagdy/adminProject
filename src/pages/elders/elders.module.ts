import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EldersPage } from './elders';

@NgModule({
  declarations: [
    EldersPage,
  ],
  imports: [
    IonicPageModule.forChild(EldersPage),
  ],
})
export class EldersPageModule {}
