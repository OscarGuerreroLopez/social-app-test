import { AggregatedNotification, Notification } from "@/models";

// Group notifications by post ID
export const AggregatePosts = (
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
