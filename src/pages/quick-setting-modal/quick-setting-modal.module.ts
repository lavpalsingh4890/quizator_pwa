import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickSettingModalPage } from './quick-setting-modal';

@NgModule({
  declarations: [
    QuickSettingModalPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickSettingModalPage),
  ],
})
export class QuickSettingModalPageModule {}
