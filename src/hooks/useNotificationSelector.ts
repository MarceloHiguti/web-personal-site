import { createUseSelector } from "utils/createUseSelector";

import { notificationSlice } from "slices/notification.slice";

export const useNotificationSelector = createUseSelector(notificationSlice);
