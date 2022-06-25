import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import { DEFAULT_LNGS_NAMESPACE } from "resources/languages/constants";

import { SidebarSection } from "models/sidebar-section.types";
import { NavigationMenuItem } from "components/NavigationMenuItem/NavigationMenuItem";
import { useHgtTheme } from "hooks/useHgtTheme";
import { HgtColumn, HgtRow } from "components/Hgt";

interface NavigationHorizontalMenuProps {
  sections: SidebarSection[];
}

export const NavigationHorizontalMenu: FC<NavigationHorizontalMenuProps> = memo(
  function NavigationHorizontalMenu({
    sections,
  }: NavigationHorizontalMenuProps) {
    const { t } = useTranslation(DEFAULT_LNGS_NAMESPACE.MAIN_MENU);
    const theme = useHgtTheme();

    return (
      <HgtRow
        sx={{
          width: "100%",
          backgroundColor: theme?.hgtStyle?.horizontalMenuBackgroundColor,
        }}
      >
        {sections.map(({ children }) => {
          return children.map((child, index) => {
            return (
              <HgtColumn key={index}>
                <NavigationMenuItem
                  key={`navigation-menu-${index}-item`}
                  item={child}
                  translate={t}
                />
              </HgtColumn>
            );
          });
        })}
      </HgtRow>
    );
  }
);

//   {section.children.map((child, index) => (
//     <NavigationMenuItem
//       key={`navigation-menu-${index}-item`}
//       item={child}
//       translate={t}
//     />
//   ))}
// )}
