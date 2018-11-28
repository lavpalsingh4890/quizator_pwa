import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../pojo/post';
import { Post_Option } from '../../pojo/post_option';
import { ServerUtil } from '../server-util/serverUtil';


@Injectable()
export class PostClientApiProvider {

  constructor(private server: ServerUtil,public http: HttpClient) {
    console.log('Hello PostClientApiProvider Provider');
  }
  post(title: string, description: string, media_path: string,media_tag:string, post_type: string, post_category_id: number, post_category: string,correct_option:string,  options: string[]) {
    
    var opts :Post_Option[]= this.getOptions(correct_option,options);
    var post:Post = this.createPost(title, description,media_path,media_tag, this.getPostType(post_type), post_category_id,post_category, 1, opts);
    console.log(post);
   this.server.addPost(post);
  }
  createPost(title: string, description: string, media_path: string,media_tag:string, post_type: number, post_category_id: number, post_category: string, blogger_id: number, options: Post_Option[]) {
    var post_data: Post = {
      "title": title,
      "options": options,
      "post_type": post_type,
      "post_desc": description,
      "post_category_id": post_category_id,
      "category_name": post_category,
      "post_media_url": media_path,
      "media_tag": media_tag,
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

  getPostType(post_type:string){
    switch(post_type){
case "quiz": return 1;
case "poll": return 2;
case "fact": return 3;
    }
  }
 getOptions(correct_option:string,  items: string[]){
 var count =1;
 var options= new  Array();
 items.forEach(val=>
    {
      var is_true =false;
      if(val == correct_option)is_true =true;
      var o: Post_Option = this.createOption(count,val,is_true);
      options.push(o);
    });
return options;
 }

}
