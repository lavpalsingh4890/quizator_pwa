
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TagnameClientApiProvider {

  private data: any = {};
  constructor(public http: Http) {
    console.log('Hello TagnameClientApiProvider Provider');
  }

  getTags(keyword:string){

  }

 

}
