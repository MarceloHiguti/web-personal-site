import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Notification } from "models/notification.types";

const initialMessage: Notification = { content: "" };

export const notificationSlice = createSlice({
  name: "notification",
  initialState: initialMessage,
  reducers: {
    showNotification: (_, action: PayloadAction<Notification>) =>
      action.payload,
  },
});

export const { showNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
