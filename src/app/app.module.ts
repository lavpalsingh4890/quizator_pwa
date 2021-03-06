import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule,Slides } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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



import { EmojiProvider } from '../providers/emoji';
import { TextUtilProvider } from '../providers/text-util/text-util';
import { FCM } from '@ionic-native/fcm';
// import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { IonicStorageModule } from '@ionic/storage';
import { StorageUtilProvider } from '../providers/storage-util/storage-util';
import { SQLite } from '@ionic-native/sqlite';
import { SessionUtilProvider } from '../providers/session-util/session-util';
import { ImagePicker } from '@ionic-native/image-picker';



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { DataProvider } from '../providers/firebaseDataProvider';
import { Context } from '../providers/context';
import { Crop } from '@ionic-native/crop';
import { ImageUtil } from '../providers/ImageUtil';
import { FirebaseService } from '../providers/firebase.service';
import { PostClientApiProvider } from '../providers/post-client-api/post-client-api';
import { HttpClientModule } from '@angular/common/http';
import { TagnameClientApiProvider } from '../providers/tagname-client-api/tagname-client-api'; 
import { TagnamePage } from '../pages/add-post/tagname/tagname';

import { LongPressModule } from 'ionic-long-press';
import { ImageSelectorComponent } from '../components/image-selector/image-selector';
import { HomePageModule } from '../pages/home/home.module';


import { InAppBrowser } from '@ionic-native/in-app-browser';
import { QuickSettingModalPage } from '../pages/quick-setting-modal/quick-setting-modal';
import { FavoriteCategoryPage } from '../pages/favorite-category/favorite-category';
import { CategorymainPage } from '../pages/categorymain/categorymain';
import { CategorysubPage } from '../pages/categorysub/categorysub';


import { IonicImageLoader } from 'ionic-image-loader';
import { AccountPageModule } from '../pages/account/account.module';
import { AddBlogPageModule } from '../pages/add-blog/add-blog.module';

import { ChatMainPageModule } from '../pages/chat-main/chat-main.module';
import { ChatListPageModule } from '../pages/chat-list/chat-list.module';
import { CommentPageModule } from '../pages/comment/comment.module';
import { InterestPageModule } from '../pages/interest/interest.module';
import { MatchupPageModule } from '../pages/matchup/matchup.module';
import { NotificationPageModule } from '../pages/notification/notification.module';
import { SearchPageModule } from '../pages/search/search.module';
import { ViewBlogPageModule } from '../pages/view-blog/view-blog.module';
import { ViewPostPageModule } from '../pages/view-post/view-post.module';
import { MatchupPlayPageModule } from '../pages/matchup-play/matchup-play.module';
import { SubcategoryPageModule } from '../pages/category/subcategory/subcategory.module';

import { TagnamePageModule } from '../pages/add-post/tagname/tagname.module';
import { QuickSettingModalPageModule } from '../pages/quick-setting-modal/quick-setting-modal.module';
import { FavoriteCategoryPageModule } from '../pages/favorite-category/favorite-category.module';


import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { BasicDetailPageModule } from '../pages/basic-detail/basic-detail.module';

import { CommonModule } from '@angular/common'; 
import { Camera } from '@ionic-native/camera';

var firebaseConfig = {
  apiKey: "AIzaSyAh1EyYPn6Uhn8R9e9AT7wqfPA4aWp8IB4",
  authDomain: "quizator-be795.firebaseapp.com",
  databaseURL: "https://quizator-be795.firebaseio.com",
  projectId: "quizator-be795",
  storageBucket: "quizator-be795.appspot.com",
  messagingSenderId: "556459777006"
};
@NgModule({
  declarations: [
    MyApp,
    ImageSelectorComponent,
    AddPostPage,
    CategoryPage,
    CategorymainPage,
    CategorysubPage,
  ],
  imports: [
    HttpModule,
    CommonModule,
    LongPressModule,
    AccountPageModule,
    AddBlogPageModule,
    ChatMainPageModule,
    ChatListPageModule,
    CommentPageModule,
    InterestPageModule,
    MatchupPageModule,
    ChatListPageModule,
    WelcomePageModule,
    BasicDetailPageModule,
    NotificationPageModule,
    SearchPageModule,
    ViewBlogPageModule,
    ViewPostPageModule,
    MatchupPlayPageModule,
    SubcategoryPageModule,
    TagnamePageModule, 
    QuickSettingModalPageModule,
    FavoriteCategoryPageModule,
    BrowserModule,
    HomePageModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    IonicImageLoader.forRoot(),
    IonicStorageModule.forRoot({
      name: 'quizator',
         driverOrder: ['indexeddb','sqlite', 'websql']
    }),
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
    SubcategoryPage,
    TagnamePage,
    QuickSettingModalPage,
    FavoriteCategoryPage,
    CategorymainPage,
    CategorysubPage
  ],
  providers: [
    StatusBar,
    Slides,
    SplashScreen,
    Deeplinks,
    EmojiProvider,
    FCM,
    // Facebook,
    GooglePlus,
    SQLite,
   // { provide: LocationStrategy, useClass: PathLocationStrategy },
    TextUtilProvider,
    StorageUtilProvider,
    SessionUtilProvider,
    ServerUtil,
    ImagePicker,
    FirebaseService,
    Camera,
    DataProvider,
    Context,
    Crop,
    ImageUtil,
    InAppBrowser,
   // { provide: LocationStrategy, useClass: PathLocationStrategy },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostClientApiProvider,
    TagnameClientApiProvider
  ]
})
export class AppModule {}
