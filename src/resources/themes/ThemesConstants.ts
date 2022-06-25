import { createTheme } from "@mui/material/styles";

export interface ThemeOptions {
  hgtStyle?: {
    horizontalMenuBackgroundColor?: string;
    backgroundColor?: string;
  };
}
declare module "@mui/material/styles" {
  interface Theme {
    hgtStyle: {
      horizontalMenuBackgroundColor: string;
      backgroundColor: string;
    };
  }

  interface ThemeOptions {
    hgtStyle?: {
      horizontalMenuBackgroundColor?: string;
      backgroundColor?: string;
    };
  }
}

export const themeMaterial = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
  },
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#F50057",
    },
  },
  hgtStyle: {
    horizontalMenuBackgroundColor: "white",
    backgroundColor: "red",
  },
});

export const defaultBackgroundColor = "#fafafa";

export enum Spacing {
  zero = 0,
  xxs = 2,
  xs = 4,
  s = 8,
  sm = 14,
  m = 16,
  l = 24,
  xl = 32,
  xxl = 64,
  xx2l = 128,
  xx3l = 256,
}

export const fixedSize = {
  brandLogoHeight: 32,
  navigationDrawerWidth: 320,
  menuProfileMaxWidth: 200,
  defaultAvatarSize: 32,
  menuProfileAvatarSize: 48,
  defaultContainerSpacing: 3,
  sideDrawerWidth: 600,
  dialogMessageMaxWidth: 256,
  listViewSearchbarWidth: 400,
};

export const formatPx = (spacing: Spacing): string => `${spacing}px`;
