import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  random_int:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.color = this.colors[0];
  }
  isImage :boolean =true;
  color: any;
  colors = ['#e43737', '#e0e437', '#37e446', '#375be4', '#972cb1'];

  onSlideChanged() {
    this.random_int =Math.floor(Math.random() * (this.colors.length - 0 + 1)) + 0;
    this.color = this.colors[this.random_int];
  }
  slides = [
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad BasicDetailPage');
  }
  // @ViewChild('myInput') myInput: ElementRef;
  // resize() {
  //     var element = this.myInput['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
  //     var scrollHeight = element.scrollHeight;
  //     element.style.height = scrollHeight + 'px';
  //     this.myInput['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
  // }

  change() {
    // get elements
    var element   = document.getElementById('messageInputBox');
    var textarea  = element.getElementsByTagName('textarea')[0];

    // set default style for textarea
    textarea.style.minHeight  = '0';
    textarea.style.height     = '0';

    // limit size to 96 pixels (6 lines of text)
    var scroll_height = textarea.scrollHeight;
    if(scroll_height > 96)
      scroll_height = 96;

    // apply new style
    element.style.height      = scroll_height + "px";
    textarea.style.minHeight  = scroll_height + "px";
    textarea.style.height     = scroll_height + "px";
}

}
