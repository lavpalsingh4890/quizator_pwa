import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Icon, Button } from 'ionic-angular';
import { Http } from '@angular/http';
import { Favorite } from '../../entityModel/fav';
import { ServerUtil } from '../../providers/server-util/serverUtil';
import { environment as ENV } from "../../environments/environment";
@IonicPage()
@Component({
  selector: 'page-favorite-category',
  templateUrl: 'favorite-category.html',
})
export class FavoriteCategoryPage {
  category_name
  private search_mode =false;
  private favList: Favorite[] =new Array();
  private search_button = "search";
  private link = ENV.BASE_URL + ENV.FAV_API +"/2";
  private link_category = ENV.BASE_URL + ENV.CATEGORY_API + "/match";
  private keyword: string;
  private data: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public http: Http) {
    this.getFav();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoriteCategoryPage');
  }

  getCategory() {
    if(this.keyword){
      this.search_mode=true;
    var link = this.link_category+"?"+"keyword="+this.keyword;
    this.http.get(link, ServerUtil.getHeaders() )
      .subscribe(d => {
        this.data.response = d["_body"];
        let data_array = JSON.stringify(d.json());
        let favs = JSON.parse(data_array);
        this.favList =new Array();
        for (let i = 0; i < favs.data.length; i++) {
          this.favList.push(favs.data[i]);
        }
        console.log(this.favList);
      }, error => {
        console.log("Oooops!");
      });
    }
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

  dismiss() {
    this.viewCtrl.dismiss();
  }
  addFavorite(category_id,idx){
  var link = this.link+"?category="+category_id;
  this.http.post(link, ServerUtil.getHeaders())
  .subscribe(d => {
    this.data.response = d["_body"];
    let data_array = JSON.stringify(d.json());
    let favs = JSON.parse(data_array);
    console.log(favs);
  }, error => {
    console.log("Oooops!");
  });
}
  removeFavorite(category_id,idx){
 
      this.favList.splice(idx, 1);
      console.log(this.favList.toString());
    
    var link = this.link+"/"+category_id;
    this.http.delete(link, ServerUtil.getHeaders())
    .subscribe(d => {
      this.data.response = d["_body"];
      let data_array = JSON.stringify(d.json());
      let favs = JSON.parse(data_array);
      console.log(favs);
    }, error => {
      console.log("Oooops!");
    });
  }
  search() {

  }
}
