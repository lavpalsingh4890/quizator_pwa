
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
@Injectable()
export class StorageUtilProvider {

  constructor(private sqlite: SQLite) {
    console.log('Hello StorageUtilProvider Provider');
  }
  
  executeSQL(database,sql){
    var database_name = database+".db";
    this.sqlite.create({
      name: database_name,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql(sql, [])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }



}
