import Icon from "@mui/material/Icon";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { SidebarSectionItem } from "models/sidebar-section.types";

const ColoredListItemIcon = styled(ListItemIcon)(() => ({
  color: "inherit",
}));

export interface NavigationMenuItemProps {
  item: SidebarSectionItem;
  translate: (key: string) => string;
}

export const NavigationMenuItem: React.FC<NavigationMenuItemProps> = memo(
  function NavigationMenuItem({ item, translate }: NavigationMenuItemProps) {
    const theme = useTheme();

    return (
      <NavigationLink
        theme={theme}
        to={item.href}
        isActive={(_, location) => isActive(location.pathname, item.href)}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ColoredListItemIcon>
              <Icon>{item.icon}</Icon>
            </ColoredListItemIcon>
            <ListItemText primary={translate(item.label)} />
          </ListItemButton>
        </ListItem>
      </NavigationLink>
    );
  }
);

export const isActive = (pathname: string, href: string): boolean =>
  href === "/" ? pathname === href : pathname.startsWith(href);

export const NavigationLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
  [`&.active`]: {
    color: theme.palette.primary.main,
  },
}));
