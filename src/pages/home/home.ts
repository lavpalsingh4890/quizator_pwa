import { Component, ViewChild } from '@angular/core';
import { Post } from '../../entityModel/post';
import { IonicPage, NavController, NavParams, Content, ToastController, AlertController } from 'ionic-angular';
import { ServerUtil } from '../../providers/server-util/serverUtil';

import { environment as ENV } from "../../environments/environment";
import { Http, Headers, RequestOptions } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Post_Option } from '../../pojo/post_option';
import { post } from '../../providers/mock-post';
import { Post_Viewed } from '../../entityModel/post_viewed';
import { Observable } from 'rxjs';
@IonicPage({
  name: 'home'

})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private errorMessage: string;
  private page = 0;
  
  private post_view_mode:number = 0; // 0 -> listing , 1 -> endless , 2 -> page view
  private post_filter:string;        //
  private post_category:string;      // category id
  private post_type:number;          // none-> All, 1 -> quiz, 2 -> poll , 3 -> fact

  private link = ENV.BASE_URL + ENV.POST_API+"?size=15&page=";
  private post_viewed = new Set();
  private post_correct_options: Post_Viewed[] = new Array();
  private currentSelected: number;
  private is_correct: boolean;
  private posts: Post[]= new Array();
  private data: any = {};
  private selectedOption: Post_Option;
  constructor(private alertCtrl:AlertController, private iab: InAppBrowser, public navCtrl: NavController, public http: Http) {
    //this.posts = post;
    var link = this.link + this.page;
      this.getPosts(link);
  }


  get_correct_option(post_options, post_id) {
    for (var post_option of post_options) {
      if (post_option.is_correct) {
        return post_option.id;
      }
    }
  }


  getPosts(link) {
    
    this.http.get(link, ServerUtil.getHeaders())
      .subscribe(d => {
        this.data.response = d["_body"];
        let data_array = JSON.stringify(d.json());
        let posts = JSON.parse(data_array);
       // this.posts = posts.data;
        for(let i=0; i<posts.data.length; i++) {
          this.posts.push(posts.data[i]);
        }
        console.log(this.posts);
      }, error => {
        console.log("Oooops!");
      });
  }

  tapOption(post, post_option, id, pid) {
    var post_options: Post_Option[] = post.options;
    if(this.post_type==1){
    var correct_id = this.get_correct_option(post_options, post.post_id);
    correct_id = correct_id - 1;
    var correct_opt_id = "post_option_" + pid + "_" + correct_id;
    var input = document.getElementById(correct_opt_id);
    input.style.background = "green";
    input.style.color = "whitesmoke"
    this.currentSelected = id;
    this.is_correct = post_option.is_correct;
  }
    this.selectedOption = post_option;
    if (!this.post_viewed.has(post.post_id)) {
      var post_play: Post_Viewed = {
        "post_id": post.post_id,
        "is_correct": this.is_correct
      };
      this.post_correct_options.push(post_play);
      console.log(this.post_correct_options);
    }
    this.post_viewed.add(post.post_id);
  }

  checkIfCorrect(post_id) {
    const index = this.post_correct_options.findIndex(post_viewed => post_viewed.post_id === post_id);
    if (index > -1) {
      return this.post_correct_options[index].is_correct;
    }
  }
  checkIfExists(post_id) {
    const checkRoleExistence = roleParam => this.post_correct_options.some(({ post_id }) => post_id == roleParam);
    return checkRoleExistence(post_id);
  }
  searchOnWeb(search_tag) {

    const browser = this.iab.create('https://www.google.co.in/search?q=' + search_tag);
  }

  doInfinite(infiniteScroll) {
    this.page = this.page + 1;
    setTimeout(() => {
      var link = this.link + this.page;

      if(this.post_type){
        link+="&type="+this.post_type;
      }
      this.getPosts(link);

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  myAlert_show(){
    let myAlert = this.alertCtrl.create({
            title: 'Select Post Type',
            enableBackdropDismiss: true ,
        buttons:[
    {
        text: 'OK',
        handler: data => {
           this.post_type = data;
            console.log('OK clicked. Data -> ' + JSON.stringify(data));
            this.page=0;
            var link = this.link + this.page+"&type="+data;
            this.posts =new Array();
            this.getPosts(link);   
            },
        role: ''
    },
    {
        text: 'Cancel',
        handler: data => {
            console.log('Cancel clicked. Data -> ' + JSON.stringify(data));
            },
        role: 'cancel'
    }
],
    inputs:[
    {
        type: 'radio',
        id: 'all',
        name: 'all',
        'label': 'All',
        value: 'all',
        'checked': true
    },
    {
        type: 'radio',
        id: 'quiz',
        name: 'quiz',
        'label': 'Quiz',
        value: '1',
        'checked': false
    },
    {
        type: 'radio',
        id: 'poll',
        name: 'poll',
        'label': 'Poll',
        value: '2',
        'checked': false
    },
    {
        type: 'radio',
        id: 'fact',
        name: 'fact',
        'label': 'Fact',
        value: '3',
        'checked': false
    }
]
    });
    myAlert.present();
}
}
