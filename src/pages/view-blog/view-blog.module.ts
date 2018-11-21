import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewBlogPage } from './view-blog';

@NgModule({
  declarations: [
    ViewBlogPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewBlogPage),
  ],
})
export class ViewBlogPageModule {}
