import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Context } from '../../providers/context';

@IonicPage()
@Component({
  selector: 'page-quick-setting-modal',
  templateUrl: 'quick-setting-modal.html',
})
export class QuickSettingModalPage {

  private all_button_color ="light";
  private quiz_button_color ="light";
  private fact_button_color ="light";
  private poll_button_color ="light";
  private post_type:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuickSettingModalPage');
    this.post_type = Context.get("post_type");
    this.initializePostType();
  }
  initializePostType(){
    switch(this.post_type){
      case 0:
      this.all_button_color ="dark";
      break;
      case 1:
      this.quiz_button_color ="dark";
      break;
      case 2:
      this.poll_button_color ="dark";
      break;
      case 3:
      this.fact_button_color ="dark";
      break;
      default:
      this.all_button_color ="dark";

    }
  }
  set_PostType(post_type:number){
    Context.set("post_type",post_type);
    this.post_type = post_type;
    this.dismiss (true);
  }
  dismiss (isUpdate) {
    this.viewCtrl.dismiss({"post_type" : this.post_type,"isUpdate":isUpdate});
  }
}
