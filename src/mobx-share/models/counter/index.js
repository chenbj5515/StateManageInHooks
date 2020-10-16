import { observable, action, computed } from "mobx";

class CounterStore {
  @observable
  count = 0;

  @action.bound
  increment() {
    console.log('increment');
    this.count++;
  }

  @action.bound
  decrement() {
    this.count--;
  }

  @computed
  get doubleCount(){
    return this.count * 2;
  }
}

export default new CounterStore();