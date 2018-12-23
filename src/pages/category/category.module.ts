import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryPage } from './category';
import { ImageComponentsModule } from '../../components/image-selector/imagecomponents.module';

@NgModule({
  declarations: [
    CategoryPage,
  ],
  imports: [
    ImageComponentsModule,
    IonicPageModule.forChild(CategoryPage),
  ],
})
export class CategoryPageModule {}
