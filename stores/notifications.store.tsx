import { makeAutoObservable } from "mobx";
import { Fetcher } from "@/utils/http";
import { GroupLikesComments } from "@/utils/groupLikesComments";
import { AggregatedNotification, TextNotifications } from "@/models";
import { BackendUrl } from "@/consts";

class NotificationsStore {
  notifications: AggregatedNotification[] = [];
  notificationsNavBar: string[] = [];
  isLoading = true;
  mergedNotifications: TextNotifications[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getNotificationsFromApi = async (token: string) => {
    try {
      this.isLoading = true;
      const apiUrl = `${BackendUrl}getNotifications`;
      const aggregatedNotificationsFromApi = await Fetcher(
        apiUrl,
        {
          method: "GET"
        },
        token
      );
      this.notifications = aggregatedNotificationsFromApi;
      const groupedLikesComments = GroupLikesComments(
        aggregatedNotificationsFromApi
      );

      this.mergedNotifications = groupedLikesComments;

      this.isLoading = false;
    } catch (error) {
      console.error(`error ${error}`);
    }
  };
}

const notificationsStore = new NotificationsStore();
export default notificationsStore;
