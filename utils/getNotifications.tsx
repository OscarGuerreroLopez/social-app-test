import notificationsStore from "@/stores/notifications.store";

export const GetNotifications = async (token: string) => {
  await notificationsStore.getNotificationsFromApi(token);
};
