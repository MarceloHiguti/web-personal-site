import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { Notification } from "models/notification.types";
import { showNotification } from "slices/notification.slice";

type ShowNotificationCallback = (notification: Notification) => void;

export function useShowNotification(): ShowNotificationCallback {
  const dispatch = useDispatch();

  return useCallback(
    (notification: Notification) => {
      dispatch(showNotification(notification));
    },
    [dispatch]
  );
}
