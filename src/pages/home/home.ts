import { Component, ViewChild } from '@angular/core';
import { Post } from '../../entityModel/post';
import { IonicPage, NavController, NavParams, Content, ToastController, AlertController } from 'ionic-angular';
import { ServerUtil } from '../../providers/server-util/serverUtil';

import { environment as ENV } from "../../environments/environment";
import { Http, Headers, RequestOptions } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Post_Option } from '../../pojo/post_option';
import { post } from '../../providers/mock-post';
@IonicPage({
  name: 'home'
  
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private post_viewed= new Set();
  private currentSelected:number;
  private is_correct:boolean;
  private posts:Post[];
  private data: any = {};
  private selectedOption:Post_Option;
  constructor(private iab: InAppBrowser,public navCtrl: NavController, public http: Http) {
    this.posts = post;
   // this.getPosts();
  }


  getPosts() {
   
    var link = ENV.BASE_URL + ENV.POST_API ;
    this.http.get(link, ServerUtil.getHeaders())
      .subscribe(d => {
        this.data.response = d["_body"];
        let data_array = JSON.stringify(d.json());
        let posts = JSON.parse(data_array);
        this.posts = posts.data;
      
        console.log(this.posts);
      }, error => {
        console.log("Oooops!");
      });
  }

  tapOption(post,post_option,id){

    this.post_viewed.add(post.post_id);
    console.log(this.post_viewed);
    this.currentSelected = id;
    this.is_correct = post_option.is_correct;
    this.selectedOption = post_option;

  }

  searchOnWeb(search_tag){
    console.log(search_tag);
   // window.open('https://www.google.co.in/search?q='+search_tag, '_system', 'location=yes'); return false;
  const browser = this.iab.create('https://www.google.co.in/search?q='+search_tag);
  }

}
