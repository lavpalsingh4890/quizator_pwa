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

  items = [
    {
      email: "lavpalsingh4890@gmail.com",
      imageUrl: 'https://lorempixel.com/1200/1200/nature/1',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/2',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/3',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/4',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/5',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/6',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/7',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/8',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/9',
    }, {
      imageUrl: 'https://lorempixel.com/1200/1200/nature/10',
    },
  ];
}
