import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { ImageUtil } from './ImageUtil';
 
@Injectable()
export class DataProvider {
 
  constructor(private db: AngularFireDatabase, private afStorage: AngularFireStorage) { }
 
  getFiles() {
    let ref = this.db.list('files2');
 
    return ref.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  
  uploadToStorage(information): AngularFireUploadTask {
    let newName = `${new Date().getTime()}.txt`;
 
    return this.afStorage.ref(`files2/${newName}`).putString(information);
  }
 
  storeInfoToDatabase(metainfo) {
    let toSave = {
      created: metainfo.timeCreated,
      url: metainfo.downloadURLs[0],
      fullPath: metainfo.fullPath,
      contentType: metainfo.contentType
    }
    return this.db.list('files').push(toSave);
  }
 
  getPath(storagePath){
  return   this.afStorage.ref(storagePath).getDownloadURL();
  }
 
  deleteFile(file) {
    let key = file.key;
    let storagePath = file.fullPath;
 
    let ref = this.db.list('files');
 
    ref.remove(key);
    return this.afStorage.ref(storagePath).delete();
  }
}