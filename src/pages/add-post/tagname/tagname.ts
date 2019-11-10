import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ToastController, AlertController } from 'ionic-angular';
import { ServerUtil } from '../../../providers/server-util/serverUtil';

import { environment as ENV } from "../../../environments/environment";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Tag } from '../../../entityModel/tag';
import { Context } from '../../../providers/context';
import { Category } from '../../../entityModel/category';
import { CategoryPage } from '../../category/category';

@IonicPage()
@Component({
  selector: 'page-tagname',
  templateUrl: 'tagname.html',
})
export class TagnamePage {


  private items: Tag[];
  private categories: Category[];
  private categories_init: Category[];
  private items_init: Tag[];
  private tagData: Tag[];
  private keyword: string;
  private type: string;
  private data: any = {};
  private isCategory: boolean = false;

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.keyword = this.navParams.get("keyword");
    this.type = this.navParams.get("type");
    console.log(this.type);
    if (this.type == 'category') {
      this.isCategory = true;
      this.initializeCategories();
      this.getCategories();
    }
    else {
      this.initializeItems();
      this.getTags();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagnamePage');
  }
  initializeItems() {
    this.items = [

    ];
  }
  longPressed(item) {
    if (this.type == 'category') {
      this.navCtrl.push(CategoryPage,{"Category":item});
    }
    else

      this.presentPrompt(item);
    console.log('Long press card ' + item);
  }

  updateTag(new_tag: Tag, id) {
    var link = ENV.BASE_URL_TASVEER + ENV.TAGNAME_API + "/" + id;
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

  presentPromptCategory(item) {
    let alert = this.alertCtrl.create({
      title: 'Edit Category',
      inputs: [
        {
          name: 'CategoryName',
          placeholder: 'Category Name',
          value: item.category
        },
        {
          name: 'CategoryMediaUrl',
          placeholder: 'Media Url',
          value: item.category_media
        },
        {
          name: 'ParentID',
          placeholder: 'Parent ID',
          value: item.parentId
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
            if (data.CategoryName != item.category || data.CategoryMediaUrl != item.category_media || data.ParentID != item.parentId) {
              var new_Category: Category = {
                "id": item.id,
                "parentId": data.ParentID,
                "category": data.CategoryName,
                "category_media": data.CategoryMediaUrl
              }
              this.updateCategory(new_Category, item.id).subscribe(d => {
                this.getCategories();
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
  updateCategory(new_Category: any, id: any): any {
    var link = ENV.BASE_URL_VARG + ENV.CATEGORY_API + "/" + id;
    return this.http.put(link, new_Category, ServerUtil.getHeaders())
  }
  getTags() {
    var link = ENV.BASE_URL_TASVEER + ENV.TAG_FIND_API + this.keyword;
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

  getCategories() {
    var link = ENV.BASE_URL_VARG + ENV.CATEGORY_FIND_API + this.keyword;
    this.http.get(link, ServerUtil.getHeaders())
      .subscribe(d => {
        this.data.response = d["_body"];
        console.log(this.data.response);
        let data_array = JSON.stringify(d.json());
        let categories = JSON.parse(data_array);
        this.categories = categories.data;
        this.categories_init = categories.data;
        if(this.categories.length==0){
          this.navCtrl.push(CategoryPage,{"keyword":this.keyword});
        }
      }, error => {
        console.log("Oooops!");
      });
  }

  log(item) {
    Context.set("Tag", item);
    this.navCtrl.pop();
  }

  selectCategory(item) {
    Context.set("Category", item);
    this.navCtrl.pop();
  }

  getItems(ev: any) {

    if (this.type == 'category') {
      this.categories = this.categories_init;
      const val = ev.target.value;
      if (val && val.trim() != '') {
        this.categories = this.categories.filter((item) => {
          return (item.category.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
    else {
      this.items = this.items_init;
      const val = ev.target.value;
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.tag.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
  }

  back() {
    this.navCtrl.pop();
  }

  initializeCategories(): any {
    this.categories = new Array();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter AddPostPage');
    var category: Category = <Category>Context.get("Category");
    if (category != null) {
      this.back();
    }
  }
}
