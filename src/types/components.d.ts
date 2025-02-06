export interface IVideo {
  id: string;
  title: string;
  description: string;
  video_url: string;
  num_comments: number;
}

export interface IComment {
  created_at: string;
  content: string;
  user_id: string;
  video_id: string;
  id: string;
}
