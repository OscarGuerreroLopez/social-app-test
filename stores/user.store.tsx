import { makeAutoObservable } from "mobx";
class UserStore {
  token: string | undefined;
  avatar: string | undefined;
  isLogged = false;
  name = "";

  constructor() {
    makeAutoObservable(this);
  }

  setUser(token: string, avatar: string, name: string) {
    try {
      this.token = token;
      this.avatar = avatar;
      this.isLogged = true;
      this.name = name;
    } catch (error) {
      console.error(error);
    }
  }
}

const userStore = new UserStore();
export default userStore;
