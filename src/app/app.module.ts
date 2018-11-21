import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule,Slides } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WelcomePage } from '../pages/welcome/welcome';

import { BasicDetailPage } from '../pages/basic-detail/basic-detail';
import { AccountPage } from '../pages/account/account';
import { AddBlogPage } from '../pages/add-blog/add-blog';
import { AddPostPage } from '../pages/add-post/add-post';
import { ChatMainPage } from '../pages/chat-main/chat-main';
import { ChatListPage } from '../pages/chat-list/chat-list';
import { CommentPage } from '../pages/comment/comment';
import { InterestPage } from '../pages/interest/interest';
import { MatchupPage } from '../pages/matchup/matchup';
import { NotificationPage } from '../pages/notification/notification';
import { SearchPage } from '../pages/search/search';
import { ViewBlogPage } from '../pages/view-blog/view-blog';
import { ViewPostPage } from '../pages/view-post/view-post';
import { MatchupPlayPage } from '../pages/matchup-play/matchup-play';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks } from '@ionic-native/deeplinks';
import { ServerUtil } from '../providers/server-util/serverUtil';
import { HttpModule } from '@angular/http';
import { CategoryPage } from '../pages/category/category';
import { SubcategoryPage } from '../pages/category/subcategory/subcategory';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    BasicDetailPage,
    AccountPage,
    AddBlogPage,
    AddPostPage,
    ChatMainPage,
    ChatListPage,
    CommentPage,
    InterestPage,
    MatchupPage,
    NotificationPage,
    SearchPage,
    ViewBlogPage,
    ViewPostPage,
    MatchupPlayPage,
    SubcategoryPage,
    CategoryPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      statusbarPadding: true,
      //locationStrategy: 'path'
     },
    {
      links: [
       { component: WelcomePage, name: 'welcome', segment: 'welcome' },
       { component: HomePage, name: 'home', segment: 'home' },
       { component: BasicDetailPage, name: 'basic', segment: 'basic' },
       { component: AccountPage, name: 'account', segment: 'account' },
       { component: AddBlogPage, name: 'addblog', segment: 'addblog' },
       { component: AddPostPage, name: 'addpost', segment: 'addpost' },
       { component: ChatMainPage, name: 'chat', segment: 'chat' },
       { component: ChatListPage, name: 'chatlist', segment: 'chatlist' },
       { component: CommentPage, name: 'comment', segment: 'comment' },
       { component: InterestPage, name: 'interest', segment: 'interest' },
       { component: MatchupPage, name: 'matchup', segment: 'matchup' },
       { component: NotificationPage, name: 'notification', segment: 'notification' },
       { component: SearchPage, name: 'search', segment: 'search' },
       { component: ViewBlogPage, name: 'viewblog', segment: 'viewblog' },
       { component: ViewPostPage, name: 'viewpost', segment: 'viewpost' },
       { component: MatchupPlayPage, name: 'matchupplay', segment: 'matchupplay' }

      ]}
      )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    BasicDetailPage,
    AccountPage,
    AddBlogPage,
    AddPostPage,
    ChatMainPage,
    ChatListPage,
    CommentPage,
    InterestPage,
    MatchupPage,
    NotificationPage,
    SearchPage,
    ViewBlogPage,
    ViewPostPage,
    MatchupPlayPage,
    CategoryPage,
    SubcategoryPage
  ],
  providers: [
    StatusBar,
    Slides,
    SplashScreen,
    Deeplinks,
    ServerUtil,
   // { provide: LocationStrategy, useClass: PathLocationStrategy },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
