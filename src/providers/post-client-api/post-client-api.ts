import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Post } from '../../pojo/post';
import { Post_Option } from '../../pojo/post_option';
import { ServerUtil } from '../server-util/serverUtil';
import { Tag } from '../../pojo/tag';

import { environment as ENV } from "../../environments/environment";

@Injectable()
export class PostClientApiProvider {
  private data: any = {};
  constructor(private server: ServerUtil, public http: Http) {
    console.log('Hello PostClientApiProvider Provider');
  }
  post(title: string,  media_path: string, media_tag: string, media_source: string, post_type: string, post_category_id: number, correct_option: string, options: string[], description: string,) {

    var tag: Tag = this.createTag(media_path, media_tag, media_source);
    console.log(tag);

    var opts: Post_Option[] = this.getOptions(correct_option, options);

    this.addTag(tag, title, description, this.getPostType(post_type), post_category_id, 1, opts);
  }

  addTag(tag: Tag, title: string, description: string, post_type: number, post_category_id: number, blogger_id: number, opts: Post_Option[]) {
    var link = ENV.BASE_URL + ENV.TAGNAME_API;
  
    this.http.post(link, tag, ServerUtil.getHeaders())
      .subscribe(d => {
        this.data.response = d["_body"];
        let data_array = JSON.stringify(d.json());
        let data_parsed = JSON.parse(data_array);
       let data_ = data_parsed.data;
       let media_id = data_.media_id;
      
       var post: Post = this.createPost(title, description, post_type, post_category_id, 1, opts, media_id);
       console.log(post);
       this.server.addPost(post);
      }, error => {
        console.log("Oooops!");
      });
  }

  createTag(media_path: string, media_tag: string, media_source: string) {
    var tag_data: Tag = {
      "mediaUrl": media_path,
      "tag": media_tag,
      "imageCredits": media_source
    };
    return tag_data;
  }
  createPost(title: string, description: string, post_type: number, post_category_id: number, blogger_id: number, options: Post_Option[], media_id: number) {
    var post_data: Post = {
      "title": title,
      "options": options,
      "post_type": post_type,
      "post_desc": description,
      "post_category_id": post_category_id,
      "blogger_id": blogger_id,
      "post_media_id": media_id
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

  getPostType(post_type: string) {
    switch (post_type) {
      case "quiz": return 1;
      case "poll": return 2;
      case "fact": return 3;
    }
  }
  getOptions(correct_option: string, items: string[]) {
    var count = 1;
    var options = new Array();
    items.forEach(val => {
      var is_true = false;
      if (val == correct_option) is_true = true;
      var o: Post_Option = this.createOption(count, val, is_true);
      options.push(o);
    });
    return options;
  }

}
