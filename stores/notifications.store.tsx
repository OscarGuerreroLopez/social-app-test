import { makeAutoObservable } from "mobx";
import { Fetcher } from "@/utils/http";
import { AggregateNotifications } from "@/utils/aggregateNotifications";
import { AggregatedNotification, TextNotifications } from "@/models";
import { BackendUrl } from "@/consts";

class NotificationsStore {
  notifications: AggregatedNotification[] = [];
  isLoading = true;
  mergedNotifications: TextNotifications[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getPostsFromApi = async (token: string) => {
    try {
      this.isLoading = true;
      const apiUrl = `${BackendUrl}getPosts`;
      const aggregatedNotificationsFromApi = await Fetcher(
        apiUrl,
        {
          method: "GET"
        },
        token
      );
      this.notifications = aggregatedNotificationsFromApi;

      this.mergedNotifications = AggregateNotifications(
        aggregatedNotificationsFromApi
      );

      this.isLoading = false;
    } catch (error) {
      console.error(`error ${error}`);
    }
  };
}

const notificationsStore = new NotificationsStore();
export default notificationsStore;
