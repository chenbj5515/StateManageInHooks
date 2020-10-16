import { observable, action, computed } from "mobx";

class NameStore {
  @observable
  ageList = [22, 23, 24];

  @action.bound
  increment() {
    console.log('increment');
    this.name.push(Math.random() * 100)
  }
}

export default new NameStore();