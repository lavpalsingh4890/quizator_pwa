import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, Platform, ToastController, AlertController } from 'ionic-angular';
import { TextUtilProvider } from '../../providers/text-util/text-util';
import { normalizeURL } from 'ionic-angular';
import { ImageUtil } from '../../providers/ImageUtil';
import { Context } from '../../providers/context';
import { Storage } from '@ionic/storage';
import { PostClientApiProvider } from '../../providers/post-client-api/post-client-api';
import { Tag } from '../../entityModel/tag';
import { Observable, of } from 'rxjs';
import { Post } from '../../pojo/post';
import { Post_Option } from '../../entityModel/post_option';
import { TagnamePage } from '../../pages/add-post/tagname/tagname';
import { SubcategoryPage } from '../../pages/category/subcategory/subcategory';
import { AddPostPage } from '../../pages/add-post/add-post';

@Injectable()
@Component({
  selector: 'image-selector',
  templateUrl: 'image-selector.html'
})
export class ImageSelectorComponent {
  private option: string = "";
  private items = [
  ];

  @Input()media_tag =null;
  @Input()media_source =null;
  @Input()image: any =null;
  @Output()
  mediaTagChange:EventEmitter<string> = new EventEmitter();
  @Output()
  mediaSourceChange:EventEmitter<string> = new EventEmitter();
  @Output()
  imageChange:EventEmitter<string> = new EventEmitter();
  private data: any = {};
  private isImage: boolean = false;
  private isImageUploaded: boolean = false;
  @Input()isTagPicked
  private isImageURL: boolean = false;
  @Input()mediaId
 
  constructor(public alertCtrl: AlertController, private postClient: PostClientApiProvider, private storage: Storage,
    private toastCtrl: ToastController, private imageUtil: ImageUtil, private platform: Platform, private navCtrl: NavController, private textUtil: TextUtilProvider) {

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
  }
  getImage() {
    this.isImageURL = false;
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
  upload() {
    if (!Context.get("isImageUploading")) {
      Context.set("isImageUploading", true);
      this.imageUtil.uploadImageToFirebase(this.image).then(photoURL => {
        Context.set("isImageUploading", false);
        Context.set("photoURL", photoURL);
        this.image = photoURL;
        this.isImageUploaded = true;
        this.mediaChange(1);
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
  mediaChange(type){
    switch(type){
      case 1:
      this.imageChange.emit(this.image);
      break;
      case 2:
      this.mediaTagChange.emit(this.media_tag);
      break;
      case 3:
      this.mediaSourceChange.emit(this.media_source);
      break;
    }
  }
}
