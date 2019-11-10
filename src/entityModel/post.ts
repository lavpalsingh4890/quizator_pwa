import { Post_Option } from "./post_option";
import { Post_Category } from "./post_category";
import { Post_Media } from "./post_media";

export interface Post {
    post_id:number;
    blogger_id: number;
    title: string;
    post_desc: string;
    post_type: string;
    options:Post_Option[];
    post_category_id:Post_Category;
    post_media_id:Post_Media;
    post_time:string;
    search_tag:string;
    post_state:string;

    level:number;
  }