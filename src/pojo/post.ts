import { Post_Option } from "./post_option";

export interface Post {
    blogger_id: number;
    title: string;
    post_desc: string;
    post_state:string;
    post_type: number;
    options:Post_Option[];
    search_tag:string;
   
  }