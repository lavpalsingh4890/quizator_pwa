import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ToastController, AlertController } from 'ionic-angular';
import { ServerUtil } from '../../../providers/server-util/serverUtil';

import { environment as ENV } from "../../../environments/environment";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Tag } from '../../../entityModel/tag';
import { Context } from '../../../providers/context';

@IonicPage()
@Component({
  selector: 'page-tagname',
  templateUrl: 'tagname.html',
})
export class TagnamePage {
  private items: Tag[];
  private items_init: Tag[];
  private tagData: Tag[];
  keyword: string;
  private data: any = {};

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
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
  longPressed(item) {
    this.presentPrompt(item);
    console.log('Long press card ' + item);
  }

  updateTag(new_tag: Tag, id) {
    var link = ENV.BASE_URL + ENV.TAGNAME_API + "/" + id;
    return this.http.put(link, new_tag, ServerUtil.getHeaders())
  }
  presentPrompt(item) {
    let alert = this.alertCtrl.create({
      title: 'Edit Tag',
      inputs: [
        {
          name: 'TagName',
          placeholder: 'Tag Name',
          value: item.tag
        },
        {
          name: 'TagMediaUrl',
          placeholder: 'Media Url',
          value: item.mediaUrl
        },
        {
          name: 'MediaSource',
          placeholder: 'Media Source',
          value: item.imageCredits
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Done',
          handler: data => {
            if (data.TagName != item.tag || data.TagMediaUrl != item.mediaUrl || data.MediaSource != item.imageCredits) {
              var new_tag: Tag = {
                "id": item.id,
                "mediaUrl": data.TagMediaUrl,
                "tag": data.TagName,
                "imageCredits": data.MediaSource
              }
              this.updateTag(new_tag, item.id).subscribe(d => {
                this.getTags();
              }, error => {

              });

            } else {
              return false;
            }
          }
        }
      ]
    });
    alert.present();
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
        this.items_init = tags.data;
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
    this.items = this.items_init;

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
