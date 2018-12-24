import { Component, ViewChild } from '@angular/core';
import { Post } from '../../entityModel/post';
import { IonicPage, NavController, NavParams, Content, ToastController, AlertController, ModalOptions, Modal, ModalController } from 'ionic-angular';
import { ServerUtil } from '../../providers/server-util/serverUtil';

import { environment as ENV } from "../../environments/environment";
import { Http, Headers, RequestOptions } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Post_Option } from '../../pojo/post_option';
import { post } from '../../providers/mock-post';
import { Post_Viewed } from '../../entityModel/post_viewed';
import { Observable } from 'rxjs';
import { AddPostPage } from '../add-post/add-post';
import { QuickSettingModalPage } from '../quick-setting-modal/quick-setting-modal';
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
  private post_view_mode: number = 0; // 0 -> listing , 1 -> endless , 2 -> page view
  private post_filter: string;        //
  private post_category: string;      // category id
  private post_type: number = 0;          // none-> All, 1 -> quiz, 2 -> poll , 3 -> fact

  private link = ENV.BASE_URL + ENV.POST_API + "?size=15&page=";
  private poll_link = ENV.BASE_URL + ENV.POST_API + "/poll/";
  private post_viewed = new Set();
  private post_correct_options: Post_Viewed[] = new Array();
  private currentSelected: number;
  private is_correct: boolean;
  private posts: Post[] = new Array();
  private data: any = {};
  private selectedOption: Post_Option;
  post_type_label;
  constructor(private toastCtrl: ToastController,public modal: ModalController, private alertCtrl: AlertController, private iab: InAppBrowser, public navCtrl: NavController, public http: Http) {
    // this.posts = post;
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
        for (let i = 0; i < posts.data.length; i++) {
          this.posts.push(posts.data[i]);
        }
        console.log(this.posts);
      }, error => {
        console.log("Oooops!");
      });
  }

  tapOption(post, post_option, id, pid) {
    var post_options: Post_Option[] = post.options;
    if (post.post_type == 1) {
      var correct_id = this.get_correct_option(post_options, post.post_id);
      correct_id = correct_id - 1;
      var correct_opt_id = "post_option_" + pid + "_" + correct_id;
      var input = document.getElementById(correct_opt_id);
      input.style.background = "green";
      input.style.color = "whitesmoke"
      this.currentSelected = id;
      this.is_correct = post_option.is_correct;
    } else if (post.post_type == 2) {
      if (!this.post_viewed.has(post.post_id)) {
        this.poll(post.post_id, id);
        var total_votes = post.total_votes+1;
        var index = 0;
        for (var post_option_var of post_options) {
          var opt_id = "post_option_div_label_" + pid + "_" + index;
          var opt_element = document.getElementById(opt_id);
          var poll_count = post_option_var.poll_count;
          if (index == id) {
            poll_count = poll_count + 1;
          }
          var percent = (poll_count / total_votes) * 100;
          var opt_div_id = "post_option_div_" + pid + "_" + index;
          var opt_div_element = document.getElementById(opt_div_id);
          opt_element.innerText =  "" + poll_count;
          opt_div_element.style.background = "green";
          opt_div_element.style.color = "whitesmoke"
          opt_div_element.style.width = percent + "%";
          index++;
        }
      }else{
        let toast = this.toastCtrl.create({
          message: 'Already participated',
          duration: 3000,
          position: 'bottom'
        });
      
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
      
        toast.present();
      }

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

  poll(post_id, option) {
    var link = this.poll_link + post_id + "/" + option;
    this.http.put(link, ServerUtil.getHeaders())
      .subscribe(d => {
        this.data.response = d["_body"];
        console.log(this.data.response);
      }, error => {
        console.log("Oooops!");
      });
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

      if (this.post_type) {
        link += "&type=" + this.post_type;
      }
      this.getPosts(link);

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }



  open_Modal() {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: true
    };

    const myModalData = {
      name: 'Paul Halliday',
      occupation: 'Developer'
    };

    const myModal: Modal = this.modal.create(QuickSettingModalPage);
    myModal.onDidDismiss(data => {

      if (data != null && data.isUpdate) {
        console.log(data.post_type);
        var type = "";
        this.post_type_label = null;
        if (data.post_type != 0) {
          type = "&type=" + data.post_type;
          switch (data.post_type) {
            case 1:
              this.post_type_label = "Quiz";
              break;
            case 2:
              this.post_type_label = "Poll";
              break;
            case 3:
              this.post_type_label = "Facts";
              break;
          }

        }

        this.post_type = data.post_type;
        this.page = 0;
        var link = this.link + this.page + type;
        this.posts = new Array();
        this.getPosts(link);
      }
    });
    myModal.present();
  }
}
