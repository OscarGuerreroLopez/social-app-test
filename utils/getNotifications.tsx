import notificationsStore from "@/stores/notifications.store";
import { axiosFetcher } from "@/utils/http";

export const GetNotifications = async (token: string) => {
  const result = await axiosFetcher(
    "http://localhost:3000/api/getNotifications",
    { method: "GET" },
    token
  );
};
