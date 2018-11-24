import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { Context } from "./context";

@Injectable()
export class FirebaseService {

  constructor(){}

  
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


}
