import { makeObservable, observable, computed, action } from "mobx";

class UserStore {
    user

    constructor() {
        makeObservable(this, {
            user: observable,
            getUser: computed,
            setUser: action
        });
        this.user = {}
    }

    setUser(user) {
        this.user = user;
    }

    get getUser() {
        return this.user;
    }
}

const userStore = new UserStore();

export default userStore;