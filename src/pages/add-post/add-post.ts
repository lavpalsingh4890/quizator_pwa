import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post_Option } from '../../pojo/post_option';
import { Post } from '../../pojo/post';
import { ServerUtil } from '../../providers/server-util/serverUtil';


@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {

  constructor(public server: ServerUtil, public navCtrl: NavController, public navParams: NavParams) {


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
