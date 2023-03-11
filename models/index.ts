export interface User {
  id: string;
  name: string;
  avatar?: string;
}

export interface Comment {
  user: User;
  commentText: string;
}

export interface Post {
  id: string;
  title: string;
}

export interface LikeNotification {
  type: "Like";
  post: Post;
  user: User;
}

export interface CommentNotification {
  type: "Comment";
  post: Post;
  comment: {
    id: string;
    commentText: string;
  };
  user: User;
}

export type Notification = LikeNotification | CommentNotification;

export interface AggregatedNotification {
  post: Post;
  likes: User[];
  comments: Comment[];
}

export interface TextNotifications {
  postId: string;
  postTitle: string;
  user: {
    name: string;
    avatar: string | undefined;
  }[];
  text: string;
}
