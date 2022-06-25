import { Theme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { FC, memo } from "react";

import { useLayoutSelector } from "hooks/useLayoutSelector";
import { BrandLogo } from "./BrandLogo";
import { MenuCollapseButton } from "./MenuCollapseButton";
import { useHgtTheme } from "hooks/useHgtTheme";

export const ApplicationNavbar: FC = memo(function ApplicationNavbar() {
  const theme = useHgtTheme();
  const overDrawerIndexPosition = 1;
  const positionFromDrawer = (theme: Theme) =>
    theme.zIndex.drawer + overDrawerIndexPosition;

  const isNavbarVisible = useLayoutSelector((state) => state.visibility.navbar);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: positionFromDrawer,
        display: isNavbarVisible ? undefined : "none",
        backgroundColor: theme?.hgtStyle?.horizontalMenuBackgroundColor,
      }}
      data-testid="application-navbar"
    >
      <Toolbar>
        <MenuCollapseButton />
        <BrandLogo />
      </Toolbar>
    </AppBar>
  );
});
