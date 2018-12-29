import { Component, ViewChild } from '@angular/core';
import { Post } from '../../entityModel/post';
import { IonicPage, NavController, NavParams, Content, ToastController, AlertController, ModalOptions, Modal, ModalController, App, LoadingController, Slides } from 'ionic-angular';
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
import { FavoriteCategoryPage } from '../favorite-category/favorite-category';
import { PostView } from '../../entityModel/postView';
import { Context } from '../../providers/context';
@IonicPage({
  name: 'home'

})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('slides') slides: Slides;
  private errorMessage: string;
  private current_post_id = 0;
  private page = 0;
  m_id = 0;
  post_time_out = 500;
  private exclude_already_viewed: boolean = false;
  private post_view_mode: number = 2; // 0 -> listing , 1 -> endless , 2 -> page view
  private post_filter: string;        //
  private post_category: string;      // category id
  private post_type: number = 0;          // none-> All, 1 -> quiz, 2 -> poll , 3 -> fact

  private postView: PostView[] = new Array();
  private link = ENV.BASE_URL + ENV.POST_API + "?size=15&page=";
  private poll_link = ENV.BASE_URL + ENV.POST_API + "/poll/";
  private postview_link = ENV.BASE_URL + ENV.POSTVIEW_API + "/1";
  private post_viewed = new Set();
  private post_correct_options: Post_Viewed[] = new Array();
  private currentSelected: number;
  private is_correct: boolean = false;
  private posts: Post[] = new Array();
  private single_post: Post[] = new Array();
  private data: any = {};
  private selectedOption: Post_Option;
  total_page_count = 0;
  post_type_label;
  type = "";
  constructor(public loadingCtrl: LoadingController, private _app: App, private toastCtrl: ToastController, public modal: ModalController, private alertCtrl: AlertController, private iab: InAppBrowser, public navCtrl: NavController, public http: Http) {
    // this.posts = post;
    var link = this.link + this.page;
    this.getPosts(link);
    this.getPostView();
  }

  addPostView(postId, isCorrectAttempt) {
    var link = this.postview_link + "?postId=" + postId + "&isCorrectAttempt=" + isCorrectAttempt;
    this.http.post(link, ServerUtil.getHeaders())
      .subscribe(d => {
        this.data.response = d["_body"];
        let data_array = JSON.stringify(d.json());
        let posts = JSON.parse(data_array);
        // this.posts = posts.data;

        console.log(posts);
      }, error => {
        console.log("Oooops!");
      });
  }
  getPostView() {
    this.http.get(this.postview_link, ServerUtil.getHeaders())
      .subscribe(d => {
        this.data.response = d["_body"];
        let data_array = JSON.stringify(d.json());
        let posts = JSON.parse(data_array);
        // this.posts = posts.data;
        this.postView = posts.data;


        for (var i = 0; i < posts.data.length; i++) {
          this.post_viewed.add(posts.data[i].postId);
        }

        console.log(this.postView);
      }, error => {
        console.log("Oooops!");
      });
  }
  ionViewDidEnter() {
    document.title = "Quizator - Home";

  }
  onSlideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log(currentIndex);
    if (this.slides.isEnd()) {
      this.fetchMorePost();
    }
  }

  fetchMorePost() {
    this.page = this.page + 1;
    setTimeout(() => {
      if (this.total_page_count == 0 || this.total_page_count > this.page) {
        var link = this.link + this.page;

        if (this.post_type) {
          link += "&type=" + this.post_type;
        }
        this.getPosts(link);
      }
      console.log('Async operation has ended' + this.total_page_count);
    }, 1000);
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

        this.total_page_count = posts.data.totalPages;
        if (Context.get("exclude_already_viewed")) {
          
          for (var i = 0; i < posts.data.post.length; i++) {
            if (!this.post_viewed.has(posts.data.post[i].post_id)) {
            
              this.posts.push(posts.data.post[i]);
            }
          }
        } else {
          this.posts = this.posts.concat(posts.data.post);
        }
        if (this.posts) {

          this.single_post.push(this.posts[this.current_post_id]);
        }

      }, error => {
        console.log("Oooops!");
      });
  }
  contain_post(post_id) {
    return this.post_viewed.has(post_id);
  }


  tapOption(post, post_option, id, pid) {

    var post_options: Post_Option[] = post.options;
    if (post.post_type == 1) {
      this.post_time_out = 500;
      var correct_id = this.get_correct_option(post_options, post.post_id);
      correct_id = correct_id - 1;
      var correct_opt_id = "post_option_" + pid + "_" + correct_id;

      var input = document.getElementById(correct_opt_id);
      if (input) {
        input.style.background = "green";
        input.style.color = "whitesmoke"
      }
      this.currentSelected = id;
      this.is_correct = post_option.is_correct;
    } else if (post.post_type == 2) {
      this.post_time_out = 2000;
      if (!this.post_viewed.has(post.post_id)) {
        this.poll(post.post_id, id);

      } else {
        let toast = this.toastCtrl.create({
          message: 'Already participated',
          duration: 3000,
          position: 'bottom'
        });

        toast.onDidDismiss(() => {

        });

        toast.present();
      }
      var total_votes;
      if (!this.post_viewed.has(post.post_id)) {
        total_votes = post.total_votes + 1;
        post.total_votes = total_votes;
      } else {
        total_votes = post.total_votes;
      }
      var index = 0;
      for (var post_option_var of post_options) {
        var opt_id = "post_option_div_label_" + pid + "_" + index;
        var opt_element = document.getElementById(opt_id);
        var poll_count = post_option_var.poll_count;
        if (!this.post_viewed.has(post.post_id)) {
          if (index == id) {

            poll_count = poll_count + 1;
            post_option_var.poll_count = poll_count;
          }
        }
        var percent = (poll_count / total_votes) * 100;
        var opt_div_id = "post_option_div_" + pid + "_" + index;
        var opt_div_element = document.getElementById(opt_div_id);

        if (opt_element)
          opt_element.innerText = "" + poll_count;

        if (opt_div_element) {
          opt_div_element.style.background = "green";
          opt_div_element.style.color = "whitesmoke"
          opt_div_element.style.width = percent + "%";
        }
        index++;
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
    if (!this.post_viewed.has(post.post_id)) {
      this.post_viewed.add(post.post_id);
      this.addPostView(post.post_id, this.is_correct);
    }
    if (this.post_view_mode == 2) {
      if (this.current_post_id != this.posts.length) {
        this.current_post_id++;
        this.presentLoadingDefault();
      }


    }
    if (this.current_post_id + 2 == this.posts.length) {
      this.fetchMorePost();
    }
  }
  next() {
    this.post_time_out = 0;
    if (this.current_post_id + 1 != this.posts.length) {
      this.current_post_id++;
      this.presentLoadingDefault();
    } else if (this.current_post_id + 1 == this.posts.length) {
      this.fetchMorePost();
    }
  }
  prev() {
    this.post_time_out = 0;
    if (this.current_post_id != 0)
      this.current_post_id--;
    this.presentLoadingDefault();
  }
  sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      showBackdrop: false
    });

    loading.present();

    setTimeout(() => {
      this.single_post = new Array();

      this.single_post.push(this.posts[this.current_post_id]);
      loading.dismiss();
    }, this.post_time_out);
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
    const index = this.postView.findIndex(post_viewed => post_viewed.postId === post_id);

    if (index > -1) {
      return this.postView[index].correctAttempt;
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
      if (this.total_page_count == 0 || this.total_page_count > this.page) {
        var link = this.link + this.page;

        if (this.post_type) {
          link += "&type=" + this.post_type;
        }
        this.getPosts(link);
      }
      console.log('Async operation has ended' + this.total_page_count);
      infiniteScroll.complete();
    }, 1000);
  }
  open_Modal() {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss: true
    };

    const myModalData = {
      name: 'Paul Halliday',
      occupation: 'Developer'
    };
    var link;
    const myModal: Modal = this.modal.create(QuickSettingModalPage);
    myModal.onDidDismiss(data => {

      if (data.post_view_mode != null && this.post_view_mode != data.post_view_mode)
        this.post_view_mode = data.post_view_mode;
      if (data != null && data.isUpdate) {

        this.post_type_label = null;
        if (data.post_type != 0) {
          this.type = "&type=" + Context.get("post_type");
          switch (data.post_type) {
            case 1:
              this.post_type_label = "Quiz";
              this.post_time_out = 500;
              break;
            case 2:
              this.post_type_label = "Poll";
              this.post_time_out = 2000;
              break;
            case 3:
              this.post_type_label = "Facts";
              this.post_view_mode = 2;
              break;
          }

        } else {
          this.type = "";
        }
        this.total_page_count = 0;
        this.post_type = data.post_type;
        this.page = 0;
        this.current_post_id = 0;

        link = this.link + this.page + this.type;
        this.posts = new Array();
        this.single_post = new Array();
        this.getPosts(link);
      }
      if (data.goToFav) {
        this.goToFavorite();
      }
      if (data.exclude_already_viewed != null && this.exclude_already_viewed != data.exclude_already_viewed) {
        this.exclude_already_viewed = data.exclude_already_viewed;

        this.total_page_count = 0;
        this.page = 0;
        this.posts = new Array();
        this.single_post = new Array();
        this.current_post_id = 0;
        console.log("============" + data.exclude_already_viewed);
        if (this.type != "")
          link = this.link + this.page + this.type;
        else
          link = this.link + this.page;
        this.getPosts(link);

      }

    });
    myModal.present();
  }
  goToFavorite() {

    const myModal: Modal = this.modal.create(FavoriteCategoryPage);
    myModal.onDidDismiss(data => {

    });
    myModal.present();
  }
}
