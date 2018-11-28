import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { Context } from "./context";
import { ToastController, AlertController } from "ionic-angular";
import { DataProvider } from "./firebaseDataProvider";

@Injectable()
export class FirebaseService {

  constructor( private toastCtrl: ToastController, private dataProvider: DataProvider,private alertCtrl: AlertController){}

  
  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };

  uploadImage(imageURI){
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let newName = `${new Date().getTime()}`;
      let imageRef = storageRef.child('image').child('post').child(newName);
      Context.set("uploaded_image_key",newName);
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          resolve(snapshot.downloadURL)
        }, err => {
          reject(err);
        })
      })
    })
  }

  removeImage(name){
    let storagePath ="image/post/"+name;
    return firebase.storage().ref(storagePath).delete();
  }
  getInfo() {

    this.dataProvider.getPath("files2/1543066535346.txt").subscribe(data => console.log(data));
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
          message: 'New File added!' + res,
          duration: 3000
        });
        toast.present();
      });
    });
  }

}
