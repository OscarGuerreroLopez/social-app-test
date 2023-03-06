interface User {
  id: string;
  name: string;
  avatar?: string;
}

interface Post {
  id: string;
  title: string;
}

interface LikeNotification {
  type: "Like";
  post: Post;
  user: User;
}

interface CommentNotification {
  type: "Comment";
  post: Post;
  comment: {
    id: string;
    commentText: string;
  };
  user: User;
}

export type Notification = LikeNotification | CommentNotification;

interface AggregatedNotification {
  post: Post;
  likes: User[];
  comments: { user: User; commentText: string }[];
}

// Group notifications by post ID
export const AggregateNotifications = (
  notifications: Notification[]
): AggregatedNotification[] => {
  const aggregated: Record<string, AggregatedNotification> = {};

  notifications.forEach((notification) => {
    const postId = notification.post.id;

    if (!aggregated[postId]) {
      aggregated[postId] = { post: notification.post, likes: [], comments: [] };
    }

    if (notification.type === "Like") {
      aggregated[postId].likes.push(notification.user);
    } else {
      aggregated[postId].comments.push({
        user: notification.user,
        commentText: notification.comment.commentText
      });
    }
  });

  return Object.values(aggregated);
};
