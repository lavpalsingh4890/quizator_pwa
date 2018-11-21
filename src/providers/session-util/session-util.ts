
import { Injectable } from '@angular/core';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { App_Constants } from '../../providers/constants/App_Constants';
import { Storage } from '@ionic/storage';
import { session } from '../../pojo/session';

import { NavController } from 'ionic-angular';
import { AccountPage } from '../../pages/account/account';

import { App, ViewController } from 'ionic-angular';
@Injectable()
export class SessionUtilProvider {
  private session_obj: session;
  constructor( public appCtrl: App,private fb: Facebook, private googlePlus: GooglePlus, private storage: Storage) {
    
    this.initialize_session()
    this.check_login_state();
  }

  initialize_session() {
    this.storage.set(App_Constants.SESSION_STATE, "N");
  }
  get_login_state() {
    return this.storage.get(App_Constants.SESSION_STATE);
  }

  set_login_state() {
    this.storage.set(App_Constants.SESSION_STATE, "Y");
  }

  clear_login_state() {
    this.session_obj = null;
    this.storage.set(App_Constants.SESSION_OBJECT, this.session_obj);
    this.storage.set(App_Constants.SESSION_STATE, "N");
  }

  check_login_state() {
    this.get_login_state().then((val) => {
      if (val == 'N') {
        console.log('Hello SessionUtilProvider Provider');
        this.appCtrl.getRootNav().push(AccountPage);
        //this.navCtrl.push(AccountPage);
       // this.navUtil.navigateTo('Account_page');
      }
    });
  }

  set_login_data(name,email,imageurl,login_type,bday,gender) {
    this.session_obj = new session(name,email,imageurl,login_type,bday,gender);
    this.storage.set(App_Constants.SESSION_OBJECT, this.session_obj);
  }

  googleLogin() {
    this.googlePlus.login({
      'scopes': '',
    })
      .then(res => {
        console.log(JSON.stringify(res));
        console.log(res.imageUrl)
      })
      .catch(err => console.error(err));
  }

  facebookLogin() {
    this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
      .then((res: FacebookLoginResponse) => {
        if (res.status == "connected") {
          var fb_id = res.authResponse.userID;
          var fb_token = res.authResponse.accessToken;
          this.fb.api("/me?fields=name,gender,birthday,email", []).then((user) => {

            var gender = user.gender;
            var birthday = user.birthday;
            var name = user.name;
            var email = user.email;

            console.log("=== USER INFOS ===");
            console.log("Gender : " + gender);
            console.log("Birthday : " + birthday);
            console.log("Name : " + name);
            console.log("Email : " + email);
          });
        }
        else {
          console.log("An error occurred...");
        }
      })
      .catch((e) => {
        console.log('Error logging into Facebook', e);
      });
  }
}
