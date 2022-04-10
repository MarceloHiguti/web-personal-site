/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { setToLocalStorage, getFromLocalStorage } from "utils/utils";
import _ from "lodash";

type UseThemeType = {
  theme: any;
  themeLoaded: boolean;
  setMode: (mode: any) => void;
  getFonts: () => any;
};

export const useTheme = (): UseThemeType => {
  const themes = getFromLocalStorage("all-themes");
  const [theme, setTheme] = useState(themes.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: any) => {
    setToLocalStorage("theme", mode);
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes, "font"));
    return allFonts;
  };

  useEffect(() => {
    const localTheme = getFromLocalStorage("theme");
    localTheme ? setTheme(localTheme) : setTheme(themes.light);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};
