import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Post } from '../../pojo/post';
import { Post_Option } from '../../pojo/post_option';
import { ServerUtil } from '../server-util/serverUtil';
import { Tag } from '../../pojo/tag';

import { environment as ENV } from "../../environments/environment";
import { Observable, of } from 'rxjs';
import { PostRequestBody } from '../../pojo/postRequestBody';

@Injectable()
export class PostClientApiProvider {
  private data: any = {};
  constructor(public http: Http) {
    console.log('Hello PostClientApiProvider Provider');
  }
  post(isTagPicked: boolean, isImageUploaded: boolean, mediaId: number, title: string, search_tag: string, media_path: string, media_tag: string, media_source: string, post_type: string, post_category_id: number, correct_option: string, options: string[], description: string, category_tag:string) {
    var opts: Post_Option[] = this.getOptions(correct_option, options);

    if (!isTagPicked || isImageUploaded) {
      var tag: Tag = this.createTag(media_path, media_tag, media_source);
      console.log(tag);

      return this.addTag(tag, title, description, this.getPostType(post_type), post_category_id, 1, opts);

    } else {
      var post: Post = this.createPost(title, description, search_tag, this.getPostType(post_type), post_category_id, 1, opts, mediaId,category_tag);
      console.log(post);
      var media_arr :number[]= new Array();
          var category_arr:number[]= new Array();

          media_arr.push(mediaId);
          category_arr.push(post_category_id);
      var postRequestBody:PostRequestBody = this.createPostRequestBody(post,media_arr,category_arr);
      return this.addPost(postRequestBody);
    }

  }

  addTag(tag: Tag, title: string, description: string, post_type: number, post_category_id: number, blogger_id: number, opts: Post_Option[]) {
    var link = ENV.BASE_URL_TASVEER + ENV.TAGNAME_API;

    return this.http.post(link, tag, ServerUtil.getHeaders())

  }

  createTag(media_path: string, media_tag: string, media_source: string) {
    var tag_data: Tag = {
      "mediaUrl": media_path,
      "tag": media_tag,
      "imageCredits": media_source
    };
    return tag_data;
  }
  createPost(title: string, description: string, search_tag: string, post_type: number, post_category_id: number, blogger_id: number, options: Post_Option[], media_id: number,level:string) {
    var post_data: Post = {
      "title": title,
      "options": options,
      "post_type": post_type,
      "post_desc": description,
      "blogger_id": blogger_id,
      "search_tag": search_tag,
      "post_state":"1",
      "total_votes":0,
      "level":level
    };
    return post_data;
  }

  createPostRequestBody(post: Post, media:number[], category:number[]) {
    var post_data: PostRequestBody = {
      "sawaal": post,
      "media": media,
      "category": category
    };
    return post_data;
  }
  createOption(id: number, data: string, is_true: number) {
    var post_opt: Post_Option = {
      "option": data,
      "id": id,
      "iscorrect": is_true,
      "pollcount": 0
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
      var is_true = 0;
      if (val == correct_option) is_true = 1;
      var o: Post_Option = this.createOption(count, val, is_true);
      options.push(o);
      count++;
    });
    return options;
  }
  public addPost(postRequestBody:PostRequestBody): Observable<Response> {
    var link = ENV.BASE_URL_SAWAAL + ENV.POST_API;
    var myData = JSON.stringify(postRequestBody);
    let headers = new Headers();
    console.log(postRequestBody)
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(link, myData, options);

  }
}
