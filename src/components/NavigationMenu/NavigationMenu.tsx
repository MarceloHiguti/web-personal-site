import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FC, Fragment, memo } from "react";
import { useTranslation } from "react-i18next";

import { fixedSize, formatPx, Spacing } from "resources/themes/ThemesConstants";
import { DEFAULT_LNGS_NAMESPACE } from "resources/languages/constants";

import { SidebarSection } from "models/sidebar-section.types";
import { NavigationMenuItem } from "components/NavigationMenuItem/NavigationMenuItem";

interface NavigationMenuProps {
  sections: SidebarSection[];
}

export const NavigationMenu: FC<NavigationMenuProps> = memo(
  function NavigationMenu({ sections }: NavigationMenuProps) {
    const lastIndex = sections.length - 1;
    const { t } = useTranslation(DEFAULT_LNGS_NAMESPACE.MAIN_MENU);

    return (
      <Box sx={{ width: fixedSize.navigationDrawerWidth }}>
        <List>
          {sections.map((section, index) => {
            const sectionTitle =
              section.title && section.title !== ""
                ? t(section.title)
                : undefined;

            return (
              <Fragment key={`navigation-menu-${index}-section`}>
                <ListItem key={`navigation-menu-${index}-section-title`}>
                  <ListItemText primary={sectionTitle} />
                </ListItem>
                {section.children.map((child, index) => (
                  <NavigationMenuItem
                    key={`navigation-menu-${index}-item`}
                    item={child}
                    translate={t}
                  />
                ))}
                <Box sx={{ height: formatPx(Spacing.xl) }} />
                {index < lastIndex && <Divider />}
              </Fragment>
            );
          })}
        </List>
      </Box>
    );
  }
);
