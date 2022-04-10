import { useEffect, useRef } from "react";

// import { GlobalNotificationRenderer } from '@portal/core/notifications';
// import { ApplicationShell, useUpdateLayout } from '@portal/core/ui';
import { useUpdateLayout } from "hooks/useUpdateLayout";
import { useSyncLanguageWithLocale } from "hooks/useSyncLanguageWithLocale";

import { Routes } from "./Routes/Routes";

export const App: React.FC = () => {
  const hasUpdatedLayout = useRef(false);

  useSyncLanguageWithLocale();
  const updateLayout = useUpdateLayout();

  useEffect(() => {
    const layoutOptions = {
      profileMenu: true,
      navbar: true,
      sidebar: true,
    };
    if (!hasUpdatedLayout.current) {
      updateLayout(layoutOptions);

      // Just to prevent this effect messing with the layout after the boostrap of the app.
      hasUpdatedLayout.current = true;
    }
  }, [updateLayout]);

  return (
    <>
      {/* <ApplicationShell> */}
      <Routes />
      {/* <GlobalNotificationRenderer /> */}
      {/* </ApplicationShell> */}
    </>
  );
};
