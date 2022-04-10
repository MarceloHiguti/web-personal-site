import { configureStore } from "@reduxjs/toolkit";

import { layoutSlice } from "slices/layout.slice";
import { notificationSlice } from "slices/notification.slice";

export const store = configureStore({
  reducer: {
    [layoutSlice.name]: layoutSlice.reducer,
    [notificationSlice.name]: notificationSlice.reducer,
  },
});
