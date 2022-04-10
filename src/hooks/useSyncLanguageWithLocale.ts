import { useCallback, useEffect } from "react";

import { i18next } from "resources/languages/i18n";
// import { getFromLocalStorage } from 'utils/utils';

export function useSyncLanguageWithLocale(): void {
  // const locale = getFromLocalStorage('all-themes');
  const locale = "pt-BR";

  const updateLanguage = useCallback(async () => {
    try {
      await i18next.changeLanguage(locale);
    } catch (e) {
      console.error("Failed to update current language.");
    }
  }, [locale]);

  useEffect(() => {
    updateLanguage();
  }, [updateLanguage]);
}
