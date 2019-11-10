import { Post_Option } from "./post_option";

export interface Post {
    blogger_id: number;
    title: string;
    description: string;
    post_state:string;
    post_type: number;
    options:Post_Option[];
    search_tag:string;
    total_votes:number;
    level:string; 
  }