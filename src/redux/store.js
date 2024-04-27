import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./features/toggleDrawerSlice/toggleDrawerSlice";

const store = configureStore({
  reducer: {
    drawers: drawerReducer,
  },
});

export default store;
