import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatMainPage } from './chat-main';

@NgModule({
  declarations: [
    ChatMainPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatMainPage),
  ],
})
export class ChatMainPageModule {}
