import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, ToastController, AlertController } from 'ionic-angular';
import { SubcategoryPage } from './subcategory/subcategory';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { ImageUtil } from '../../providers/ImageUtil';
import { normalizeURL } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment as ENV } from "../../environments/environment";
import { ServerUtil } from '../../providers/server-util/serverUtil';
import { Category } from '../../entityModel/category';

import { Category as CategoryPojo } from '../../pojo/category';
import { Context } from '../../providers/context';
import { ImageSelectorComponent } from '../../components/image-selector/image-selector';
import { Tag } from '../../entityModel/tag';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  private data: any = {};
  private isImage: boolean = false;
  main_category: string = "Select Main Category";
  sub_category1: string = "Select Sub Category";
  sub_category2: string = "Select Sub Category";
  is_main_selected: boolean = false;
  is_sub_selected: boolean = false;
  is_category_image: boolean = false;
  error_text: string = "This is sample error";
  category_name: string;


  @ViewChild(ImageSelectorComponent) inputComponent: ImageSelectorComponent

  private media_tag: string;
  private media_source: string;
  private image: any;
  private isImageUploaded: boolean = false;
  private isTagPicked: boolean = false;
  private isImageURL: boolean = false;
  private mediaId: number;

  constructor(private toastCtrl: ToastController, private http: Http, private imageUtil: ImageUtil, private platform: Platform, private imagePicker: ImagePicker, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {


  }

  ionViewDidEnter() {
    var t: Tag = <Tag>Context.get("Tag");
    if (t != null) {
      console.log(t.tag);
      this.media_tag = t.tag;
      this.media_source = t.imageCredits;
      this.image = t.mediaUrl;
      this.isTagPicked = true;
      this.mediaId = t.id;
    }
    if (SubcategoryPage.is_main_selected) {
      this.main_category = SubcategoryPage.main_option.category;
      this.is_main_selected = true;
    }
    if (SubcategoryPage.is_sub1_selected) {
      this.sub_category1 = SubcategoryPage.sub_option1.category;
      this.is_sub_selected = true;
      console.log(SubcategoryPage.main_option2.id + " " + SubcategoryPage.main_option2.category + " " + SubcategoryPage.sub_option1.id + " " + SubcategoryPage.sub_option1.category);
    }
  }
  getImage() {
    this.imageUtil.getImage().then(imageData => {
      this.isImage = true;
      if (this.platform.is('ios'))
        this.image = normalizeURL(imageData);
      else
        this.image = "data:image/jpeg;base64," + imageData;
    }, error => {
      console.log('ERROR -> ' + JSON.stringify(error));
    });
  }
  pickImage() {
    var options = {

    };
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, (err) => { });
  }
  clear() {
    SubcategoryPage.is_main_selected = false;
    SubcategoryPage.main_option = null;
    SubcategoryPage.is_sub1_selected = false;
    SubcategoryPage.sub_option1 = null;
    this.is_sub_selected = false;
    this.is_main_selected = false;
    this.main_category = "Select Main Category";
    this.sub_category1 = "Select Sub Category";

    this.sub_category2 = "Select Sub Category";
  }
  ionViewDidLoad() {

  }

  ioViewDidReload() {
    console.log('ionViewDidResume CategoryPage');
  }

  getMainCategory() {
    this.navCtrl.push(SubcategoryPage);
  }

  getSubCategory(type: number) {
    this.navCtrl.push(SubcategoryPage, type);
    console.log('ionViewDidLoad CategoryPage');
  }

  done() {
    this.navCtrl.pop();
  }
  validate() {
    if (this.category_name == null || this.category_name.length < 2) {
      return "Please enter valid category name";
    }
    if (!SubcategoryPage.is_sub1_selected) {
      return "Please select valid category";
    }
    return "success";
  }
  upload() {
    var result: string = this.validate();
    if (result == 'success') {
      if (!Context.get("isImageUploading")) {
        Context.set("isImageUploading", true);
        this.imageUtil.uploadImageToFirebase(this.image).then(photoURL => {
          Context.set("isImageUploading", false);
          Context.set("photoURL", photoURL);
          this.image = photoURL;

          this.addCategory();
          console.log(photoURL);
          let toast = this.toastCtrl.create({
            message: 'Image was uploaded successfully',
            duration: 3000
          });
          toast.present();
        })
      }
    } else {
      let toast = this.toastCtrl.create({
        message: result,
        duration: 3000
      });
      toast.present();
    }
  }
  createCategory() {

    var parentId;

    if (SubcategoryPage.is_sub1_selected)
      parentId = SubcategoryPage.sub_option1.id;
    else
      parentId = SubcategoryPage.main_option.id;

    var category_data: CategoryPojo = {
      "category": this.category_name,
      "parentId": parentId,
      "category_media": this.image
    };
    return category_data;
  }
  addCategory() {
    var link = ENV.BASE_URL_VARG + ENV.CATEGORY_API;

    var category: CategoryPojo = this.createCategory();

    this.http.post(link, category, ServerUtil.getHeaders())
      .subscribe(d => {
        this.data.response = d["_body"];
        let data_array = JSON.stringify(d.json());
        let data_parsed = JSON.parse(data_array);
        let data_ = data_parsed.data;
        console.log(data_.category_id);
        this.removeImage(false);
      }, error => {
        console.log("Oooops!");
      });
  }
  removeImage(type: boolean) {
    this.isImage = false;
    this.image = null;
    if (type) {
      if (!this.isTagPicked && this.isImageUploaded)
        this.imageUtil.removeImage();
    }
    Context.set("photoURL", null);
    Context.set("Tag", null);
    this.isImageUploaded = false;
    this.media_tag = null;
    this.media_source = null;
    this.isTagPicked = false;
    this.isImageURL = false;
    this.inputComponent.removeImage(false);
  }

  onMediaTagChange(media_tag) {
    this.media_tag = media_tag;
  }
  onMediaSourceChange(media_source) {
    this.media_source = media_source;
  }
  onMediaChange(image) {
    this.image = image;
  }

}
