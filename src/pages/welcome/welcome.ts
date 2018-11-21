import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { session } from '../../pojo/session';
import { Storage } from '@ionic/storage';
import { StorageUtilProvider } from '../../providers/storage-util/storage-util';

import { App_Constants } from '../../providers/constants/App_Constants';
import { SessionUtilProvider } from '../../providers/session-util/session-util';
import { ServerUtil } from '../../providers/server-util/serverUtil';
// @IonicPage({
//   name: 'welcome'

// })
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  private session_obj:session;
  constructor(public server:ServerUtil,public navCtrl: NavController, private st: Storage, public navParams: NavParams, private storage:StorageUtilProvider,private sp:SessionUtilProvider) {
    this.sp.initialize_session();
    this.sp.check_login_state();
  }

  ionViewDidLoad() {
    //this.storage.store("love","pal");
    console.log('ionViewDidLoad WelcomePage');

  }
  slideIndex = 0;
  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/imgs/397.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/imgs/1683.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/imgs/8281.jpg',
      description: 'Take a look at our amazing options',
    }

  ];




  goToApp() {
    console.log('Go to App clicked');
  }

  skip() {
    

  }

  

  showalert(){

    console.log(this.storage.executeSQL("testdb","create table TestTable(ID INT, NAME VARCHAR(200));"));
  }
}
