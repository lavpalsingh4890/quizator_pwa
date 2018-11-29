import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../category';
import { ServerUtil } from '../../../providers/server-util/serverUtil';

import { environment as ENV } from "../../../environments/environment";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Category } from '../../../entityModel/category';

@IonicPage()
@Component({
  selector: 'page-subcategory',
  templateUrl: 'subcategory.html',
})
export class SubcategoryPage {


  searchQuery: string = '';
  items: string[];
  category_data: Category[];
  data: any = {};
  type: number;
  public static sub_option1: Category;
  public static sub_option2: Category;
  public static is_sub1_selected: boolean = false;
  public static is_sub2_selected: boolean = false;

  public static main_option:Category;
  public static main_option2:Category;
  public static is_main_selected:boolean=false;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public server: ServerUtil) {
    this.type = navParams.data;
    console.log("type: " + this.type);

    this.initializeItems();
    console.log("constructor");
  }


  log(item) {
    switch (this.type) {
      case 0:
      SubcategoryPage.main_option =item;
      SubcategoryPage.main_option2 =item;
      SubcategoryPage.is_main_selected =true;
      SubcategoryPage.sub_option1 = null;
        SubcategoryPage.is_sub1_selected = false;
        SubcategoryPage.sub_option2 = null;
        SubcategoryPage.is_sub2_selected = false;
      break;
      case 1:
        SubcategoryPage.sub_option1 = item;
        SubcategoryPage.is_sub1_selected = true;
        break;
      case 2:
        SubcategoryPage.main_option2 =SubcategoryPage.sub_option1;
        SubcategoryPage.is_main_selected =true;
        SubcategoryPage.sub_option1 = item;
        SubcategoryPage.is_sub1_selected = true;
        break;
      default:
        break;
    }

    this.navCtrl.pop();
  }
back(){
  this.navCtrl.pop();
}
  getSubCategory() {
    var link;
    switch (this.type) {
      case  0:
       link = ENV.BASE_URL + ENV.CATEGORY_API + ENV.PARENT_CATEGORY_PARAMS;
      break;
      case 1:
         link = ENV.BASE_URL + ENV.CATEGORY_API + "?type=subcategory&parent=" + SubcategoryPage.main_option2.id;
        break;
      case 2:
         link = ENV.BASE_URL + ENV.CATEGORY_API + "?type=subcategory&parent=" + SubcategoryPage.sub_option1.id;
        break;
      default:
        break;
    }

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
  initializeItems() {
    this.getSubCategory();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MaincategoryPage');
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
