import { makeAutoObservable } from "mobx";
class UserStore {
  token: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setToken(token: string) {
    try {
      this.token = token;
      console.log("@@@222", this.token);
    } catch (error) {
      console.error(error);
    }
  }
}

const userStore = new UserStore();
export default userStore;
