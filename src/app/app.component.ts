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
import { MaincategoryPage } from '../pages/category/maincategory/maincategory';
import { CategoryPage } from '../pages/category/category';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = CategoryPage;

  pages: Array<{title: string, component: any}>;

  constructor(protected deeplinks: Deeplinks,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'interest', component: InterestPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    
    });
  }

  openPage(page) {

    this.nav.setRoot(page.component);
  }
}
