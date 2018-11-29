import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { ServerUtil } from '../../../providers/server-util/serverUtil';

import { environment as ENV } from "../../../environments/environment";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Tag } from '../../../pojo/tag';
import { Context } from '../../../providers/context';


@IonicPage()
@Component({
  selector: 'page-tagname',
  templateUrl: 'tagname.html',
})
export class TagnamePage {
  private items: Tag[];
  private tagData: Tag[];
  keyword: string;
  private data: any = {};

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.keyword = this.navParams.get("keyword");
    console.log(this.keyword);
    this.initializeItems();
    this.getTags();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagnamePage');
  }
  initializeItems() {
    this.items = [
    ];
  }
  getTags() {
    var link = ENV.BASE_URL + ENV.TAG_FIND_API + this.keyword;
    this.http.get(link, ServerUtil.getHeaders())
      .subscribe(d => {
        this.data.response = d["_body"];
        console.log(this.data.response);
        let data_array = JSON.stringify(d.json());
        let tags = JSON.parse(data_array);
        this.items = tags.data;
      }, error => {
        console.log("Oooops!");
      });
  }

  log(item) {
    Context.set("Tag", item);
    this.navCtrl.pop();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.tag.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  back() {
    this.navCtrl.pop();
  }
}
