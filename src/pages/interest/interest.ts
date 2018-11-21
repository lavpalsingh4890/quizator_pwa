import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Item_Category} from '../../pojo/Item_Category';

@IonicPage()
@Component({
  selector: 'page-interest',
  templateUrl: 'interest.html',
})
export class InterestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  my_variable: string = 'light';

  selcted_category_string:string;
  selected_categories=new Array();
  validation(item:Item_Category) {
         if(item.isChecked){
          item.isChecked =false;
          item.color = 'light';
          
          this.selcted_category_string = this.selected_categories.splice(this.selected_categories.indexOf(item.data),1).toString();
         }else{
          item.isChecked =true;
          item.color = 'dark';
          this.selected_categories.push(item.data);
         }
         this.selcted_category_string = this.selected_categories.toString();
  }
 
  items :Item_Category[]=[
    {data: "ABC",color:"light",isChecked:false},
    {data:"XYZ",color:"light",isChecked:false},
    {data:"XYZ234234545",color:"light",isChecked:false},
    {data:"XYZdcsv sdv",color:"light",isChecked:false},
    {data:"XYZwddcwqevscsdvcvvfvfdv",color:"light",isChecked:false},
    {data:"XYZ2e3",color:"light",isChecked:false},
    {data:"XYZ3e2",color:"light",isChecked:false},
    {data:"XYZ3e3d3",color:"light",isChecked:false},
    {data:"XYZe3d",color:"light",isChecked:false}
  ];

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterestPage');
  }

}
