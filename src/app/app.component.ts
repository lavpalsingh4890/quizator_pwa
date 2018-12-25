import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InterestPage } from '../pages/interest/interest';
import { BasicDetailPage } from '../pages/basic-detail/basic-detail';
import { AddPostPage } from '../pages/add-post/add-post';
import { Deeplinks } from '@ionic-native/deeplinks';
import { CategoryPage } from '../pages/category/category';


import { ChatListPage } from '../pages/chat-list/chat-list';
import { ViewPostPage } from '../pages/view-post/view-post';
import { AccountPage } from '../pages/account/account';
import { ViewBlogPage } from '../pages/view-blog/view-blog';
import { WelcomePage } from '../pages/welcome/welcome';
import { FCM } from '@ionic-native/fcm';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  title ="Quizator";
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(protected deeplinks: Deeplinks,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public fcm: FCM) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'interest', component: InterestPage }
    ];

  }

  initializeApp() {
    if (this.platform.is('ios')){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.fcm.getToken().then(token => {
        // Your best bet is to here store the token on the user's profile on the
        // Firebase database, so that when you want to send notifications to this 
        // specific user you can do it from Cloud Functions.
      });
      this.fcm.onNotification().subscribe(data => {
        if(data.wasTapped){
          console.log("Received in background");
        } else {
          console.log("Received in foreground");
        };
      });
  
    
    });
  }
  }

  openPage(page) {
  
    this.nav.setRoot(page.component);
   
  }
}
