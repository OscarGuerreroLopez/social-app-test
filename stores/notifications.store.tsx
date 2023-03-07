import { makeAutoObservable } from "mobx";
import axios from "axios";
import { AggregatedNotification } from "@/models";

class NotificationsStore {
  notifications: AggregatedNotification[] = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  getNotificationsFromApi = async () => {
    try {
      this.isLoading = true;
      const apiUrl = "localhost:3000/api/getNotifications";
      const aggregatedNotificationsFromApi = await axios.get(apiUrl);
      this.notifications = aggregatedNotificationsFromApi.data;
      this.isLoading = false;
    } catch (error) {
      console.error(`error ${error}`);
    }
  };
}

const notificationsStore = new NotificationsStore();
export default notificationsStore;
