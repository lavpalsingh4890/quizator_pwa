import { ImagePicker } from "@ionic-native/image-picker";
import { ToastController, normalizeURL, Platform } from "ionic-angular";
import { FirebaseService } from "./firebase.service";
import { Crop } from '@ionic-native/crop';
import { Injectable } from "@angular/core";
import { Context } from "./context";
import { AddPostPage } from "../pages/add-post/add-post";
import { CameraOptions, Camera } from "@ionic-native/camera";

@Injectable()
export class ImageUtil {

  constructor(private imagePicker: ImagePicker,
    public cropService: Crop,
    public firebaseService: FirebaseService, private camera: Camera) {
  }
  uploadImageToFirebase(image) {
    image = normalizeURL(image);
    return this.firebaseService.uploadImage(image);
      
  }
  removeImage() {
    var image_name = Context.get("uploaded_image_key");
    this.firebaseService.removeImage(image_name).then(msg => {
      console.log(msg);
    });
  }
  openImagePicker() {
    this.imagePicker.hasReadPermission().then(
      (result) => {
        if (result == false) {
          // no callbacks required as this opens a popup which returns async
          this.imagePicker.requestReadPermission();
        }
        else if (result == true) {
          this.imagePicker.getPictures({
            maximumImagesCount: 1
          }).then(
            (results) => {
              for (var i = 0; i < results.length; i++) {
                this.uploadImageToFirebase(results[i]);
              }
            }, (err) => console.log(err)
          );
        }
      }, (err) => {
        console.log(err);
      });
  }
  openImagePickerCrop() {
    this.imagePicker.hasReadPermission().then(
      (result) => {
        if (result == false) {
          // no callbacks required as this opens a popup which returns async
          this.imagePicker.requestReadPermission();
        }
        else if (result == true) {
          this.imagePicker.getPictures({
            maximumImagesCount: 1
          }).then(
            (results) => {
              for (var i = 0; i < results.length; i++) {
                this.cropService.crop(results[i], { quality: 75 }).then(
                  newImage => {
                    this.uploadImageToFirebase(newImage);
                  },
                  error => console.error("Error cropping image", error)
                );
              }
            }, (err) => console.log(err)
          );
        }
      }, (err) => {
        console.log(err);
      });
  }
  getImage() {

    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 1024,
      targetHeight: 768,
      saveToPhotoAlbum: true,
      correctOrientation: true,
      mediaType: this.camera.MediaType.PICTURE
    };
    return this.camera.getPicture(options);


  }
}