import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/selectors";
import { PrivateRouteProps } from "../../types/types";

export function PrivateRoute({
  component: Component,
  redirectedTo = "/login",
}: PrivateRouteProps) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <>{isLoggedIn ? <Component /> : <Navigate to={redirectedTo} />}</>;
}
