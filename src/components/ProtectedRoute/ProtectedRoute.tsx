import { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

export type ProtectedRouteProps = RouteProps & {
  errorRedirect?: boolean;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  errorRedirect,
  ...props
}) => {
  if (errorRedirect) {
    return <Redirect to="/error" />;
  }

  return <Route {...props} />;
};
