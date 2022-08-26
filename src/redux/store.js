import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { Logindata } from "./reducer";
import combineReducers from "./rootreducer";
const store = configureStore({
  reducer: combineReducers,
});
export default store;
