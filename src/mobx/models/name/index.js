import { observable, action, computed } from "mobx";

class NameStore {
  @observable
  age = 23;

  @action.bound
  increment() {
    console.log('increment');
    this.name++;
  }

  @action.bound
  decrement() {
    this.name--;
  }
}

export default new NameStore();