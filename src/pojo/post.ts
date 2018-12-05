import { Post_Option } from "./post_option";

export interface Post {
    blogger_id: number;
    title: string;
    post_desc: string;
    post_type: number;
    options:Post_Option[];
    post_category_id:number;
    post_media_id:number;
    search_tag:string;
   
  }