
import { Injectable } from '@angular/core';
import { environment as ENV } from "../../environments/environment" ;
import { Http , Headers, RequestOptions} from '@angular/http';
import { Post } from '../../pojo/post';
import { Category } from '../../pojo/category';

@Injectable()
export class ServerUtil {
    data: any = {};
    constructor(public http: Http) {
        console.log(ENV.BASE_URL);
    }
public static getHeaders(){
  let headers = new Headers();
  //       headers.append('Origin' , 'http://127.0.0.1:8100');
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
       headers.append('Accept','application/json');
       headers.append('content-type','application/json');
  let options = new RequestOptions({ headers:headers});
  return options;
}
   
    getSubCategory(parent_id:number){

    }

   public addPost(post_data:Post){
        var link = ENV.BASE_URL+ ENV.POST_API;
        var myData = JSON.stringify(post_data);
           let headers = new Headers();
      //       headers.append('Origin' , 'http://127.0.0.1:8100');
            headers.append('Access-Control-Allow-Origin' , '*');
            headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
           headers.append('Accept','application/json');
           headers.append('content-type','application/json');
      let options = new RequestOptions({ headers:headers});
        this.http.post(link, myData,options)
        .subscribe(data => {
          this.data.response = data["_body"]; 
          console.log(this.data.response);
        }, error => {
          console.log("Oooops!");
        });
    }
}
