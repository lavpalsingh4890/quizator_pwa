
import { Injectable } from '@angular/core';
import { environment as ENV } from "../../environments/environment" ;
import { Http , Headers, RequestOptions, Response} from '@angular/http';
import { Post } from '../../pojo/post';
import { Category } from '../../pojo/category';
import { Observable, of } from 'rxjs';

@Injectable()
export class ServerUtil {
    data: any = {};
    constructor(public http: Http) {
        console.log(ENV.BASE_URL);
    }
public static getHeaders(){
  let headers = new Headers();
      // headers.append('Origin' , 'http://127.0.0.1:8100');
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
       headers.append('Accept','application/json');
       headers.append('content-type','application/json');
  let options = new RequestOptions({ headers:headers});
  return options;
}
   
    getSubCategory(parent_id:number){

    }

   
}
