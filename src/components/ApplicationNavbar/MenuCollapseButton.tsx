import MenuIcon from "@mui/icons-material/Menu";
import { Theme, useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { FC } from "react";
import { useDispatch } from "react-redux";

import { Spacing } from "resources/themes/ThemesConstants";

import { toggleSidebarOpen } from "../../slices/layout.slice";

export const MenuCollapseButton: FC = () => {
  const dispatch = useDispatch();
  const onToggle = () => {
    dispatch(toggleSidebarOpen());
  };
  const hasEnoughSpace = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );

  return (
    <IconButton
      disabled={hasEnoughSpace}
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={onToggle}
      sx={{
        mr: Spacing.xxs,
        display: {
          sm: "block",
          md: "block",
          lg: "none",
        },
      }}
    >
      <MenuIcon />
    </IconButton>
  );
};
