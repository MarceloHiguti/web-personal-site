import { Theme, useMediaQuery } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { FC } from "react";
import { useDispatch } from "react-redux";

import { fixedSize } from "resources/themes/ThemesConstants";

import { useLayoutSelector } from "hooks/useLayoutSelector";
import { toggleSidebarOpen } from "slices/layout.slice";
import { NavigationMenu } from "components/NavigationMenu/NavigationMenu";
import { SIDEBAR_ITEMS } from "resources/menu/MenuItems";

export const enum DrawerVariant {
  Temporary = "temporary",
  Permanent = "permanent",
}
export const ApplicationSidebar: FC = () => {
  const dispatch = useDispatch();

  const isSidebarOpen = useLayoutSelector((state) => state.isSidebarOpen);
  const isSidebarVisible = useLayoutSelector(
    (state) => state.visibility.sidebar
  );
  const onCloseSidebar = () => {
    dispatch(toggleSidebarOpen());
  };

  const sidebarSections = [SIDEBAR_ITEMS];

  const hasEnoughSpace = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );
  const drawerVariant = hasEnoughSpace
    ? DrawerVariant.Permanent
    : DrawerVariant.Temporary;

  const overHeaderPosition = 2;
  const positionFromHeader = (theme: Theme) =>
    drawerVariant === "temporary"
      ? theme.zIndex.drawer + overHeaderPosition
      : theme.zIndex.drawer;

  return (
    <Drawer
      data-testid="application-sidebar"
      variant={drawerVariant}
      onClose={onCloseSidebar}
      open={isSidebarOpen}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: isSidebarVisible ? undefined : "none",
        zIndex: positionFromHeader,
        width: fixedSize.navigationDrawerWidth,
        flexShrink: 0,
      }}
    >
      <Toolbar />
      <NavigationMenu sections={sidebarSections} />
    </Drawer>
  );
};
