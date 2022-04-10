import { FC } from "react";
import { Switch } from "react-router-dom";

import { ProtectedRoute } from "components/ProtectedRoute/ProtectedRoute";
import { HomePage } from "./HomePage";

export const HomeSection: FC = () => {
  return (
    <Switch>
      <ProtectedRoute path="/">
        <HomePage />
      </ProtectedRoute>
    </Switch>
  );
};
