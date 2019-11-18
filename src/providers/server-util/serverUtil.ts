
import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions} from '@angular/http';


@Injectable()
export class ServerUtil {
    data: any = {};
    constructor(public http: Http) {

    }
public static getHeaders(){
  let headers = new Headers();
      // headers.append('Origin' , 'http://127.0.0.1:8100');
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('allow-running-insecure-content','true');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
       headers.append('Accept','application/json');
       headers.append('content-type','application/json');
  let options = new RequestOptions({ headers:headers});
  return options;
}


   
}
