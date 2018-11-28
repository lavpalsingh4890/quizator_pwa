import { Post_Option } from "./post_option";

export interface Post {
    blogger_id: number;
    title: string;
    post_desc: string;
    post_type: number;
    options:Post_Option[];
    post_category_id:number;
    category_name:string;
    post_media_url:string;
    media_tag:string;
  }