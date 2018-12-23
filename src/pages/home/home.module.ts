import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { PostItemModule } from '../../components/post-item/postItem.module';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    PostItemModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}