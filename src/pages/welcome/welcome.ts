import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

// @IonicPage({
//   name: 'welcome'
  
// })
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
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
    console.log('Skip clicked');
  }
}
