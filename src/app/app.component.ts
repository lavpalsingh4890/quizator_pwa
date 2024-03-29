import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InterestPage } from '../pages/interest/interest';

import { AddPostPage } from '../pages/add-post/add-post';
import { Deeplinks } from '@ionic-native/deeplinks';




import { FCM } from '@ionic-native/fcm';


import { ImageLoaderConfig } from 'ionic-image-loader';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  title ="Quizator";
  rootPage: any = AddPostPage;

  pages: Array<{title: string, component: any}>;

  constructor(protected deeplinks: Deeplinks, private imageLoaderConfig: ImageLoaderConfig,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public fcm: FCM) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'interest', component: InterestPage }
    ];

  }

  initializeApp() {
    if (this.platform.is('ios')){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.imageLoaderConfig.enableDebugMode();
      this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
      this.imageLoaderConfig.setFallbackUrl('assets/imgs/logo.png');
      this.imageLoaderConfig.setMaximumCacheAge(24 * 60 * 60 * 1000);
      this.fcm.getToken().then(token => {
        console.log(token)
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
