import  countReducer  from "./counter/reducer";
import { createStore, combineReducers } from "redux";


const store = createStore(combineReducers({
  counter:countReducer,
}));

export default store;