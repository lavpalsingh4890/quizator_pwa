import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { environment as ENV } from "../../environments/environment";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Category } from '../../entityModel/category';
import { ServerUtil } from '../../providers/server-util/serverUtil';
import { SubcategoryPage } from '../category/subcategory/subcategory';
import { Favorite } from '../../pojo/fav';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-categorymain',
  templateUrl: 'categorymain.html',
})
export class CategorymainPage {

  searchQuery: string = '';
  items: string[];
  category_data: Category[];
  data: any = {};
  type: number;
  search_query;
  private link = ENV.BASE_URL + ENV.FAV_API +"/2";
  private favList: Favorite[] =new Array();

  constructor(private alertCtrl: AlertController, public http: Http, public navCtrl: NavController, public navParams: NavParams, public server: ServerUtil) {
    this.type = navParams.data;
    console.log("type: " + this.type);

    this.getCategory();
    this. getFav();
    console.log("constructor");
  }
  navigateTo(page) {
    switch (page) {
      case 0:
      this.navCtrl.push(HomePage);
        break;
        case 1:
        this.navCtrl.push(CategorymainPage);
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorymainPage');
  }
  onImageLoad(event) {
    // console.log('image ready: ', event);
  }
  getFav() {
    this.http.get(this.link, ServerUtil.getHeaders())
      .subscribe(d => {
        this.data.response = d["_body"];
        let data_array = JSON.stringify(d.json());
        let favs = JSON.parse(data_array);
        for (let i = 0; i < favs.data.length; i++) {
          this.favList.push(favs.data[i]);
        }
        console.log(this.favList);
      }, error => {
        console.log("Oooops!");
      });
  }

  getCategory() {
    var link = ENV.BASE_URL + ENV.CATEGORY_API + ENV.PARENT_CATEGORY_PARAMS;

    this.http.get(link, ServerUtil.getHeaders())
      .subscribe(d => {
        this.data.response = d["_body"];
        console.log(this.data.response);
        let data_array = JSON.stringify(d.json());
        let cat = JSON.parse(data_array);
        this.category_data = cat.data;
      }, error => {
        console.log("Oooops!");
      });
  }


}
