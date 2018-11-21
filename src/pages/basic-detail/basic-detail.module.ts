import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicDetailPage } from './basic-detail';

@NgModule({
  declarations: [
    BasicDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicDetailPage),
  ],
})
export class BasicDetailPageModule {}
