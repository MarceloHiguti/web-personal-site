import { useNotificationSelector } from "hooks/useNotificationSelector";
import { FloatingNotification } from "components/FloatingNotification/FloatingNotification";

export const GlobalNotificationRenderer: React.FC = () => {
  const notification = useNotificationSelector((state) => state);
  return <FloatingNotification notification={notification} />;
};
