import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController, AlertController } from 'ionic-angular';
import { Post_Option } from '../../pojo/post_option';
import { Post } from '../../pojo/post';
import { ServerUtil } from '../../providers/server-util/serverUtil';
import { TextUtilProvider } from '../../providers/text-util/text-util';
import { Http } from '@angular/http';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { normalizeURL } from 'ionic-angular';
import { CategoryPage } from '../category/category';

import { DataProvider } from '../../providers/firebaseDataProvider';

@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {
  option: string = "Test";
  items = [
  ];
  height = "100px";
  post_type = "quiz";
  question;
  description;
  isImage: boolean = false;
  image;
  correct_option;
  data: any = {};
  isquiz: boolean = true;
  imageSrc;
  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private dataProvider: DataProvider, private platform: Platform, private camera: Camera, public server: ServerUtil, public navCtrl: NavController, public navParams: NavParams, public textUtil: TextUtilProvider, public http: Http) {
    this.image = "../assets/imgs/397.jpg";

    this.data.username = 'Love';
    this.data.response = '';

    this.http = http;

  }

  addFile() {
    let inputAlert = this.alertCtrl.create({
      title: 'Store new information',
      inputs: [
        {
          name: 'info',
          placeholder: 'Lorem ipsum dolor...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Store',
          handler: data => {
            this.uploadInformation(data.info);
          }
        }
      ]
    });
    inputAlert.present();
  }
  uploadInformation(text) {
    let upload = this.dataProvider.uploadToStorage(text);

    // Perhaps this syntax might change, it's no error here!
    upload.then().then(res => {
      this.dataProvider.storeInfoToDatabase(res.metadata).then(() => {
        console.log(res);
        let toast = this.toastCtrl.create({
          message: 'New File added!'+res,
          duration: 3000
        });
        toast.present();
      });
    });
  }

  removeImage() {
    this.isImage = false;
    this.image = null;
  }
  getImage() {

    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.PNG,
      targetWidth: 1000,
      targetHeight: 1000,
      saveToPhotoAlbum: true,
      correctOrientation: true
    };
    this.camera.getPicture(options).then(imageData => {
      this.isImage = true;
      if (this.platform.is('ios'))
        this.image = normalizeURL(imageData);
      // IF problem only occur in ios and normalizeURL 
      //not work for you then you can also use 
      //this.base64Image= imageData.replace(/^file:\/\//, '');
      else
        this.image = "data:image/jpeg;base64," + imageData;
    }, error => {
      console.log('ERROR -> ' + JSON.stringify(error));
    });


  }
  submit() {
    var link = 'http://localhost/api.php';
    var myData = JSON.stringify({ username: this.data.username });
    this.http.post(link, myData)
      .subscribe(data => {
        this.data.response = data["_body"];
        console.log(this.data.response);
      }, error => {
        console.log("Oooops!");
      });
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
  deleteOption(item) {
    if (this.items.indexOf(item) != -1) {
      this.items.splice(this.items.indexOf(item), 1);
      console.log(this.items.toString());
    } else {

      console.log("item doesn't exist");
    }
  }
  change(index) {
    this.textUtil.change(index);
  }

  post() {
    var post_type = this.post_type;
    var question = this.question;
    var options = this.items;
    var description = this.description;
    var image = this.image;
    var correct_option = this.correct_option;
    var post = {
      "post_type": post_type,
      "question": question,
      "options": options,
      "description": description,
      "image": image,
      "correct_option": correct_option
    }
    console.log(post);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPostPage');

    var opt1 = this.createOption(1, "option1", true);
    var opt2 = this.createOption(2, "option2", false);
    var opt3 = this.createOption(3, "option3", false);
    var opts = [opt1, opt2, opt3];
    var post = this.createPost("My title", "My description", "My media path", 1, 1, "My post category", 1, opts);

    // this.server.addPost(post);
    console.log(post);
  }

  createPost(title: string, description: string, media_path: string, post_type: number, post_category_id: number, post_category: string, blogger_id: number, options: Post_Option[]) {
    var post_data: Post = {
      "title": title,
      "options": options,
      "post_type": post_type,
      "post_desc": description,
      "post_category_id": post_category_id,
      "category_name": post_category,
      "post_media_url": media_path,
      "blogger_id": blogger_id
    };
    return post_data;
  }
  createOption(id: number, data: string, is_true: boolean) {
    var post_opt: Post_Option = {
      "post_option": data,
      "id": id,
      "is_correct": is_true,
      "poll_count": 0
    };
    return post_opt;
  }
}
