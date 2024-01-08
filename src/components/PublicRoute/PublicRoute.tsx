import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/selectors";
import { PublicRouteProps } from "../../types/types";

export function PublicRoute({
  component: Component,
  redirectedTo,
}: PublicRouteProps) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <>{!isLoggedIn ? <Component /> : <Navigate to={redirectedTo} />}</>;
}
