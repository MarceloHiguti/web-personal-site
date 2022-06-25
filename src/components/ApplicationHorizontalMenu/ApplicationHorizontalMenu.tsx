import { FC } from "react";
import { useLayoutSelector } from "hooks/useLayoutSelector";
import { MENU_ITEMS } from "resources/menu/MenuItems";
import { NavigationHorizontalMenu } from "components/NavigationMenu/NavigationHorizontalMenu";
import { HgtRow } from "components/Hgt";

export const ApplicationHorizontalMenu: FC = () => {
  const isNavigationHorizontalMeuVisible = useLayoutSelector(
    (state) => state.visibility.navigationHorizontalMenu
  );

  return isNavigationHorizontalMeuVisible ? (
    <HgtRow>
      <NavigationHorizontalMenu sections={MENU_ITEMS} />
    </HgtRow>
  ) : null;
};
