import { Theme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { FC, memo } from "react";

import { useLayoutSelector } from "hooks/useLayoutSelector";
import { BrandLogo } from "./BrandLogo";
import { MenuCollapseButton } from "./MenuCollapseButton";

export const ApplicationNavbar: FC = memo(function ApplicationNavbar() {
  const overDrawerIndexPosition = 1;
  const positionFromDrawer = (theme: Theme) =>
    theme.zIndex.drawer + overDrawerIndexPosition;

  const isNavbarVisible = useLayoutSelector((state) => state.visibility.navbar);
  // const isProfileVisible = useLayoutSelector(
  //   (state) => state.visibility.profileMenu
  // );

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: positionFromDrawer,
        display: isNavbarVisible ? undefined : "none",
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
