import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { AddPostPage } from './add-post';
import { ImageComponentsModule } from '../../components/image-selector/imagecomponents.module';

@NgModule({
  declarations: [
    AddPostPage
  ],
  imports: [
    ImageComponentsModule,
    IonicPageModule.forChild(AddPostPage),
    
  ],
})
export class AddPostPageModule {}
