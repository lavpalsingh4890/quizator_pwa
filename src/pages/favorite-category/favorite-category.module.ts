import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoriteCategoryPage } from './favorite-category';

@NgModule({
  declarations: [
    FavoriteCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoriteCategoryPage),
  ],
})
export class FavoriteCategoryPageModule {}
