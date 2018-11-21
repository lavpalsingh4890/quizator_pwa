import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post_Option } from '../../pojo/post_option';
import { Post } from '../../pojo/post';
import { ServerUtil } from '../../providers/server-util/serverUtil';
import { TextUtilProvider } from '../../providers/text-util/text-util';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {
  option: string = "Test";
  items = [
  ];
  post_type = "quiz";
  question;
  description;
  image;
  correct_option;
  data: any = {};
  isquiz: boolean = true;
  constructor(public server: ServerUtil, public navCtrl: NavController, public navParams: NavParams, public textUtil: TextUtilProvider, public http: Http) {
    this.image = "../assets/imgs/397.jpg";

    this.data.username = 'Love';
    this.data.response = '';

    this.http = http;

  }
  submit() {
    var link = 'http://localhost/api.php';
    var myData = JSON.stringify({ username: this.data.username });
    this.http.post(link, myData)
      .subscribe(data => {
        this.data.response = data["_body"]; 
        console.log(this.data.response);
      }, error => {
        console.log("Oooops!");
      });
  }
  addOption() {
    if (this.option.length != 0) {
      if (this.items.indexOf(this.option) == -1) {
        this.items.push(this.option);
        console.log(this.items.toString());
        this.option = "";
      } else {

        console.log("item already exists");
      }
    } else {

      console.log("item empty");
    }
  }
  deleteOption(item) {
    if (this.items.indexOf(item) != -1) {
      this.items.splice(this.items.indexOf(item), 1);
      console.log(this.items.toString());
    } else {

      console.log("item doesn't exist");
    }
  }
  change(index) {
    this.textUtil.change(index);
  }
 
  post() {
    var post_type = this.post_type;
    var question = this.question;
    var options = this.items;
    var description = this.description;
    var image = this.image;
    var correct_option = this.correct_option;
    var post = {
      "post_type": post_type,
      "question": question,
      "options": options,
      "description": description,
      "image": image,
      "correct_option": correct_option
    }
    console.log(post);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPostPage');

    var opt1 = this.createOption(1, "option1", true);
    var opt2 = this.createOption(2, "option2", false);
    var opt3 = this.createOption(3, "option3", false);
    var opts = [opt1, opt2, opt3];
    var post = this.createPost("My title", "My description", "My media path", 1, 1, "My post category", 1, opts);

    this.server.addPost(post);
    console.log(post);
  }

  createPost(title: string, description: string, media_path: string, post_type: number, post_category_id: number, post_category: string, blogger_id: number, options: Post_Option[]) {
    var post_data: Post = {
      "title": title,
      "options": options,
      "post_type": post_type,
      "post_desc": description,
      "post_category_id": post_category_id,
      "category_name": post_category,
      "post_media_url": media_path,
      "blogger_id": blogger_id
    };
    return post_data;
  }
  createOption(id: number, data: string, is_true: boolean) {
    var post_opt: Post_Option = {
      "post_option": data,
      "id": id,
      "is_correct": is_true,
      "poll_count": 0
    };
    return post_opt;
  }
}
