import { makeAutoObservable } from "mobx";
import { Fetcher } from "@/utils/http";
import { AggregatedNotification } from "@/models";

class NotificationsStore {
  notifications: AggregatedNotification[] = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  getNotificationsFromApi = async (token: string) => {
    try {
      this.isLoading = true;
      const apiUrl = "http://localhost:3000/api/getNotifications";
      const aggregatedNotificationsFromApi = await Fetcher(
        apiUrl,
        {
          method: "GET"
        },
        token
      );
      this.notifications = aggregatedNotificationsFromApi;

      this.isLoading = false;
    } catch (error) {
      console.error(`error ${error}`);
    }
  };
}

const notificationsStore = new NotificationsStore();
export default notificationsStore;
