import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SubcategoryPage } from './subcategory/subcategory';


@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  main_category:string = "Select Main Category";
  sub_category1:string ="Select Sub Category";
  sub_category2:string ="Select Sub Category";
  is_main_selected:boolean =false;
  is_sub_selected:boolean =false;
  is_category_image:boolean =false;
  is_error:boolean =false;
  error_text:string ="This is sample error";
  image = "../assets/imgs/397.jpg";
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
    if(SubcategoryPage.is_main_selected){
     this.main_category =SubcategoryPage.main_option.category;
     this.is_main_selected =true;
    }
    if(SubcategoryPage.is_sub1_selected){
      this.sub_category1 = SubcategoryPage.sub_option1.category;
      this.is_sub_selected =true;
      console.log(SubcategoryPage.main_option2.id+" "+SubcategoryPage.main_option2.category+" "+SubcategoryPage.sub_option1.id+" "+SubcategoryPage.sub_option1.category);

    }

     }

  clear(){
    SubcategoryPage.is_main_selected=false;
    SubcategoryPage.main_option =null;
    SubcategoryPage.is_sub1_selected=false;
    SubcategoryPage.sub_option1 =null;
    this.is_sub_selected =false;
    this.is_main_selected =false;
    this.main_category ="Select Main Category";
    this.sub_category1 ="Select Sub Category";

    this.sub_category2 ="Select Sub Category";
  }
  ionViewDidLoad() {
  
  }
 
  ioViewDidReload(){
    console.log('ionViewDidResume CategoryPage');
  }

  getMainCategory(){
      this.navCtrl.push(SubcategoryPage);
  }

  getSubCategory(type:number){
   this.navCtrl.push(SubcategoryPage,type);
    console.log('ionViewDidLoad CategoryPage');

 
  }

}
