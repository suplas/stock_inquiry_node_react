import { configureStore } from "@reduxjs/toolkit";
import pagingReducer from "./slice/pagingSlice";
import ItemReducer from "./slice/itemSlice";

const store = configureStore({
  reducer: {
    stocks: ItemReducer,
    paging: pagingReducer,
  },
});

export default store;
