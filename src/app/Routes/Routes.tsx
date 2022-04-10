import { useTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";

import { ProtectedRoute } from "components/ProtectedRoute/ProtectedRoute";
import { ErrorPage } from "pages/ErrorPage/ErrorPage";
import { HomeSection } from "pages/Home/HomeSection";
import { ALL_LNGS_NAMESPACES } from "resources/languages/constants";

// import { HomePage } from '../pages/HomePage';

export const Routes: React.FC = () => {
  const { t } = useTranslation(ALL_LNGS_NAMESPACES.COMMON);

  return (
    <Switch>
      <ProtectedRoute path="/">
        <HomeSection />
      </ProtectedRoute>

      <Route path="/error">
        <ErrorPage title={t("400.title")} message={t("400.description")} />
      </Route>

      <Route path="*">
        <ErrorPage title={t("404.title")} message={t("404.description")} />
      </Route>
    </Switch>
  );
};
