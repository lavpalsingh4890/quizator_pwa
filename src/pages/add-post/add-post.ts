import { Component, ViewChild } from '@angular/core';
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
import { Tag } from '../../entityModel/tag';
import { Observable, of } from 'rxjs';
import { Post } from '../../pojo/post';
import { Post_Option } from '../../pojo/post_option';
import { ImageSelectorComponent } from '../../components/image-selector/image-selector';
import { PostRequestBody } from '../../pojo/postRequestBody';
import { Category as CategoryEntity, Category } from '../../entityModel/category'

@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {
  private option: string = "";
  private items = [
  ];
  private question: string;
  private description: string;
  private search_tag: string;
  private level: string;
  private media_tag;
  private media_source;
  private post_type = "quiz";
  private image;
  private correct_option: string;
  private data: any = {};
  private categoryId: number;
  private categoryList: CategoryEntity[] = new Array();
  private category_name: string;
  private category: string = "Select Category";
  private isImage: boolean = false;
  private isquiz: boolean = true;
  private isImageUploaded: boolean = false;
  private isTagPicked: boolean = false;
  private isImageURL: boolean = false;
  private errors: string = '';
  private mediaId: number;
  private is_error: boolean;


  @ViewChild(ImageSelectorComponent) inputComponent: ImageSelectorComponent


  constructor(public alertCtrl: AlertController, private postClient: PostClientApiProvider, private storage: Storage,
    private toastCtrl: ToastController, private imageUtil: ImageUtil, private platform: Platform, private navCtrl: NavController, private textUtil: TextUtilProvider) {
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
    if (this.media_source != null) this.storage.set("media_source", this.media_source);
    if (this.search_tag != null) this.storage.set("search_tag", this.search_tag);

    this.cancel();
  }

  validateFields() {
    this.errors = '';
    if (this.question == null || this.question.length < 10) {
      this.errors += 'Question field - minimum 10 characters required \r\n ';
      this.is_error = true;
    }
    if (this.search_tag == null || this.search_tag.length < 10) {
      this.errors += 'Search Tag field - minimum 10 characters required \r\n ';
      this.is_error = true;
    }
    if (this.categoryList.length == 0) {
      this.errors += 'Please select valid category \r\n ';
      this.is_error = true;
    }
    if (this.post_type == "quiz" && this.correct_option == null) {
      this.errors += 'Please select correct option \r\n ';
      this.is_error = true;
    }
    if (this.post_type != "fact" && (this.items == null || this.items.length < 2)) {
      this.errors += 'Please add more than one option(s) \r\n ';
      this.is_error = true;
    }
    console.log(this.errors)
    if (this.is_error) {
      return false;
    }
    return true;
  }
  post() {
    if (this.validateFields()) {
      this.postClient.post(this.isTagPicked, this.isImageUploaded, this.mediaId, this.question, this.search_tag, this.image, this.media_tag, this.media_source, this.post_type, this.categoryList, this.correct_option, this.items, this.description, this.level).subscribe(d => {
        console.log(this.isTagPicked);
        console.log(this.isImageUploaded);
        if (!this.isTagPicked || this.isImageUploaded) {
          this.data.response = d["_body"];
          let data_array = JSON.stringify(d.json());
          let data_parsed = JSON.parse(data_array);
          let data_ = data_parsed.data;
          let media_id = data_.Tasveer_id;
          var opts: Post_Option[] = this.postClient.getOptions(this.correct_option, this.items);
          console.log(opts);
          var post: Post = this.postClient.createPost(this.question, this.description, this.search_tag, this.postClient.getPostType(this.post_type), this.categoryList, 1, opts, media_id, this.level);
          console.log(post);

          var media_arr: number[] = new Array();
          var category_arr: number[] = new Array();

          media_arr.push(media_id);
          this.categoryList.forEach((element) => {
            console.log(element)
            category_arr.push(element.id);
          });


          var postRequestBody: PostRequestBody = this.postClient.createPostRequestBody(post, media_arr, category_arr);

          this.postClient.addPost(postRequestBody).subscribe(data => {
            this.data.response = data["_body"];
            console.log(this.data.response);
            this.removeImage(false);
          }, error => {
            console.log("Oooops!");
          });
        }
        this.data.response = d["_body"];
        console.log(this.data.response);
        this.removeImage(false);
      }, error => {
        switch (error.status) {
          case 409:
            this.errors += 'Duplicate TagName \r\n ';

            break;
          default:
            this.errors += 'Something Went Wrong \r\n ';

            break;


        }


      });
    } else {
      this.is_error = false;
    }
  }

  chooseCategory() {
    this.navCtrl.push(CategoryPage);
  }
  addOption() {
    if (this.option.length != 0) {
      if (this.items.indexOf(this.option) == -1) {
        this.option = this.option.replace(/\W/g, '');
        this.items.push(this.option);
        console.log(this.option);
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

    //x get elements
    var element = document.getElementById('messageInputBox' + index);
    var textarea = element.getElementsByTagName('textarea')[0];

    // set default style for textarea
    textarea.style.minHeight = '0';
    textarea.style.height = '0';

    // limit size to 96 pixels (6 lines of text)
    var scroll_height = textarea.scrollHeight;
    if (scroll_height > 96)
      scroll_height = 96;

    // apply new style
    element.style.height = scroll_height + "px";
    textarea.style.minHeight = scroll_height + "px";
    textarea.style.height = scroll_height + "px";

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
      this.mediaId = t.id;
    }
    this.category_name =null;
    var category: Category = <Category>Context.get("Category");
    if (category != null) {
      console.log(category.category);
      Context.set("Category",null)
      var cat_name: string = category.category;
      if (this.categoryList.findIndex(c => c.category === (category.category)) == -1) {
        this.categoryList.push(category);
        
      }
    }

    if (SubcategoryPage.is_sub1_selected) {
      console.log(SubcategoryPage.main_option2.id + " " + SubcategoryPage.main_option2.category + " " + SubcategoryPage.sub_option1.id + " " + SubcategoryPage.sub_option1.category);
      this.categoryId = SubcategoryPage.sub_option1.id;
      // this.category = SubcategoryPage.sub_option1.category;
      this.categoryList.push(SubcategoryPage.sub_option1);
    }else if (SubcategoryPage.is_main_selected) {
      this.categoryId = SubcategoryPage.main_option.id;
      // this.category = SubcategoryPage.sub_option1.category;
      this.categoryList.push(SubcategoryPage.main_option);
    }
    CategoryPage.clearCATSUB();
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
    Context.set("Category", null);
    this.isImageUploaded = false;

    this.categoryList = new Array();
    this.search_tag = null;
    this.description = null;
    this.level = null;
    this.category_name = null;
    this.items = [];
    this.media_tag = null;
    this.media_source = null;
    this.question = null;
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

  getCategories() {
    this.navCtrl.push(TagnamePage, { "keyword": this.category_name, "type": "category" });
  }

  deleteCategory(item) {
    if (this.categoryList.indexOf(item) != -1) {
      this.categoryList.splice(this.categoryList.indexOf(item), 1);
      console.log(this.categoryList.toString());
    } else {

      console.log("item doesn't exist");
    }
  }
}
