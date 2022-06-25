import { useTheme } from "@mui/styles";
import { ThemeOptions } from "resources/themes/ThemesConstants";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useHgtTheme = () => {
  const theme = useTheme<ThemeOptions>();

  return theme;
};
