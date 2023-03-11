import { AggregatedNotification, TextNotifications } from "@/models";

export const GroupLikesComments = (
  notifications: AggregatedNotification[]
): TextNotifications[] => {
  const likesPosts: TextNotifications[] = [];
  const commentsPosts: TextNotifications[] = [];

  notifications.forEach((notification) => {
    const { post, likes, comments } = notification;

    const likedBy = likes.map((user) => ({
      name: user.name,
      avatar: user.avatar
    }));
    if (likedBy.length) {
      likesPosts.push({
        postId: post.id,
        postTitle: post.title,
        text: "liked your post",
        user: likedBy
      });
    }
    const commentedBy = comments.map((comment) => ({
      name: comment.user.name,
      avatar: comment.user.avatar
    }));
    if (commentedBy.length) {
      commentsPosts.push({
        postId: post.id,
        postTitle: notification.post.title,
        user: commentedBy,
        text: "commented your post"
      });
    }
  });

  return [...likesPosts, ...commentsPosts];
};
