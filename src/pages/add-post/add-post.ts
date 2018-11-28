import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, ToastController, AlertController } from 'ionic-angular';
import { TextUtilProvider } from '../../providers/text-util/text-util';
import { normalizeURL } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { ImageUtil } from '../../providers/ImageUtil';
import { Context } from '../../providers/context';
import { Storage } from '@ionic/storage';
import { PostClientApiProvider } from '../../providers/post-client-api/post-client-api';
import { SubcategoryPage } from '../category/subcategory/subcategory';
import { TagnamePage } from './tagname/tagname';
import { Tag } from '../../pojo/tag';

@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {
  private option: string = "";
  private items = [
  ];

  private question;
  private description;
  private media_tag: string;
  private media_source: string;
  private post_type = "quiz";
  private image: any;
  private correct_option: string;
  private data: any = {};
  private categoryId: number;
  private category: string = "Select Category";
  private isImage: boolean = false;
  private isquiz: boolean = true;
  private isImageUploaded: boolean = false;
  private isTagPicked: boolean = false;
  private errors: string = '';

  constructor(public alertCtrl: AlertController, private postClient: PostClientApiProvider, private storage: Storage,
    private toastCtrl: ToastController, private imageUtil: ImageUtil, private platform: Platform, private navCtrl: NavController, private textUtil: TextUtilProvider) {

  }
  removeImage() {
    this.isImage = false;
    this.image = null;
    if(! this.isTagPicked)
    this.imageUtil.removeImage();
    Context.set("photoURL", null);
    
    this.isImageUploaded = false;

    this.media_tag = null;
    this.media_source = null;
    this.isTagPicked = false;
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
  cancel() {
    this.navCtrl.pop();
  }
  draft() {
    this.storage.set("isDraft", true);
    if (this.question != null) this.storage.set("question", this.question);
    if (this.description != null) this.storage.set("description", this.description);
    if (this.image != null) this.storage.set("image", this.image);
    if (this.post_type != null) this.storage.set("post_type", this.post_type);
    if (this.correct_option != null) this.storage.set("correct_option", this.correct_option);
    if (this.items != null) this.storage.set("items", this.items);
    if (this.categoryId != null) this.storage.set("categoryId", this.categoryId);
    if (this.media_tag != null) this.storage.set("media_tag", this.media_tag);

    this.cancel();
  }

  validateFields() {
    var is_error: boolean;
    this.errors = '';
    if (this.question == null || this.question.length < 10) {
      this.errors += 'Question field - minimum 10 characters required \r\n ';
      is_error = true;
    }
    if (this.categoryId == null || this.categoryId == 0) {
      this.errors += 'Please select valid category \r\n ';
      is_error = true;
    }
    if (this.post_type == "quiz" && this.correct_option == null) {
      this.errors += 'Please select correct option \r\n ';
      is_error = true;
    }
    if (this.post_type != "fact" && (this.items == null || this.items.length < 2)) {
      this.errors += 'Please add more than one option(s) \r\n ';
      is_error = true;
    }
    console.log(this.errors)
    if (is_error) {
      return false;
    }
    return true;
  }
  post() {
    if (this.validateFields()) {
      this.postClient.post(this.question, this.description, this.image, this.media_tag, this.post_type, this.categoryId, this.category, this.correct_option, this.items);
    }
  }

  chooseCategory() {
    this.navCtrl.push(CategoryPage);
  }
  addOption() {
    if (this.option.length != 0) {
      if (this.items.indexOf(this.option) == -1) {
        this.items.push(this.option);
        console.log(this.items.toString());
        this.option = "";
      } else {

        console.log("item already exists");
      }
    } else {

      console.log("item empty");
    }
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  onEnter(index) {
    this.addOption();
  }
  optionChange(it, index) {
    var elem = <HTMLInputElement>document.getElementById("option" + index);

    console.log(elem.value + " " + index);
  }

  updateOption(it, index) {
    console.log(it + " " + index);
    let itemIndex = this.items.findIndex(item => item.id == it.id);
    this.items[index] = it;
  }

  deleteOption(item) {
    if (this.items.indexOf(item) != -1) {
      this.items.splice(this.items.indexOf(item), 1);
      console.log(this.items.toString());
    } else {

      console.log("item doesn't exist");
    }
  }
  change(index) {

    // get elements
    // var element = document.getElementById('messageInputBox'+index);
    // var textarea = element.getElementsByTagName('textarea')[0];

    // // set default style for textarea
    // textarea.style.minHeight = '0';
    // textarea.style.height = '0';

    // // limit size to 96 pixels (6 lines of text)
    // var scroll_height = textarea.scrollHeight;
    // if (scroll_height > 96)
    //   scroll_height = 96;

    // // apply new style
    // element.style.height = scroll_height + "px";
    // textarea.style.minHeight = scroll_height + "px";
    // textarea.style.height = scroll_height + "px";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPostPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter AddPostPage');
    var t: Tag = <Tag>Context.get("Tag");
    if (t != null) {
      console.log(t.tag);
      this.media_tag = t.tag;
      this.media_source = t.imageCredits;
      this.image = t.mediaUrl;
      this.isTagPicked = true;
    }


    if (SubcategoryPage.is_sub1_selected) {
      console.log(SubcategoryPage.main_option2.id + " " + SubcategoryPage.main_option2.category + " " + SubcategoryPage.sub_option1.id + " " + SubcategoryPage.sub_option1.category);
      this.categoryId = SubcategoryPage.sub_option1.id;
      this.category = SubcategoryPage.sub_option1.category;
    }
  }
  upload() {
    if (!Context.get("isImageUploading")) {
      Context.set("isImageUploading", true);
      this.imageUtil.uploadImageToFirebase(this.image).then(photoURL => {
        Context.set("isImageUploading", false);
        Context.set("photoURL", photoURL);
        this.image = photoURL;

        this.isImageUploaded = true;
        console.log(photoURL);
        let toast = this.toastCtrl.create({
          message: 'Image was uploaded successfully',
          duration: 3000
        });
        toast.present();
      })
    }
  }

  getTags() {
    this.navCtrl.push(TagnamePage, { "keyword": this.media_tag });
  }


}
