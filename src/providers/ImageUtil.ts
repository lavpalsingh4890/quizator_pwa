import { ImagePicker } from "@ionic-native/image-picker";
import { ToastController, normalizeURL } from "ionic-angular";
import { FirebaseService } from "./firebase.service";
import { Crop } from '@ionic-native/crop';
import { Injectable } from "@angular/core";
import { Context } from "./context";

@Injectable()
export class ImageUtil {

  constructor(private imagePicker: ImagePicker,
    public cropService: Crop,
    public toastCtrl: ToastController,
    public firebaseService: FirebaseService) {

  }
  uploadImageToFirebase(image) {
    image = normalizeURL(image);

    //uploads img to firebase storage
    this.firebaseService.uploadImage(image)
      .then(photoURL => {
        Context.set("isImageUploading", false);
        Context.set("photoURL", photoURL);
        console.log(photoURL);
        let toast = this.toastCtrl.create({
          message: 'Image was uploaded successfully',
          duration: 3000
        });
        toast.present();
      })
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
}