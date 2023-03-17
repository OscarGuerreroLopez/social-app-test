import notificationsStore from "@/stores/notifications.store";

export const GetPosts = async (token: string) => {
  await notificationsStore.getPostsFromApi(token);
};
