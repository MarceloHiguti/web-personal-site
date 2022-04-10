import i18next, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

import {
  ALL_LNGS_NAMESPACES,
  DEFAULT_LNGS,
  DEFAULT_LNGS_NAMESPACE,
  SUPPORTED_LNGS,
} from "./constants";

export const localBundleLazyLoader = resourcesToBackend(
  (language, namespace, callback) => {
    import(`./${language}/${namespace}.json`)
      .then(({ default: resources }) => {
        callback(null, resources);
      })
      .catch((error) => {
        callback(error, null);
      });
  }
);

const isOnTesting = process.env.JEST_WORKER_ID !== undefined;

export function getI18NextBaseConfig(): InitOptions {
  return {
    lng: DEFAULT_LNGS,
    fallbackLng: DEFAULT_LNGS,
    /**
     * On testing, we load all the NSs to prevent async bugs
     */
    ns: isOnTesting
      ? Object.values(ALL_LNGS_NAMESPACES)
      : Object.values(DEFAULT_LNGS_NAMESPACE),
    supportedLngs: Object.values(SUPPORTED_LNGS),
    load: "currentOnly",
    preload: [DEFAULT_LNGS],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
  };
}

export async function initI18Next(): Promise<void> {
  await i18next
    .use(localBundleLazyLoader)
    .use(initReactI18next)
    .init(getI18NextBaseConfig());
}

export { i18next };
