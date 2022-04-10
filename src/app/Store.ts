import { configureStore } from "@reduxjs/toolkit";

import { appSlice } from "../slices/app.slice";

export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
  },
});
