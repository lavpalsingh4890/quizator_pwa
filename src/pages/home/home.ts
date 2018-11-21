import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';
@IonicPage({
  name: 'home'
  
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
