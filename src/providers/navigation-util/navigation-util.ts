import { NavController } from 'ionic-angular';
import { AccountPage } from '../../pages/account/account';

import { Injectable } from '@angular/core';

@Injectable()
export class NavigationUtil{
    constructor(public navCtrl: NavController) {
        console.log('Hello SessionUtilProvider Provider');
      }
     navigateTo(page){
        switch(page){
          case "Account_page":
          this.navCtrl.push(AccountPage);
          break;
        }
      }
}