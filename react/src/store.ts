import { configureStore } from "@reduxjs/toolkit";
import pagingReducer from "./reducers/pagingSlice";


const store = configureStore({
  reducer : {
    paging: pagingReducer,
  } 
});

export default store;