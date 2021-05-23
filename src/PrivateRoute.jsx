import { useAuth } from "./contexts/authcontext";
import { Route, Navigate } from "react-router-dom";
export function PrivateRoute({ path, ...props }) {
  const { authState } = useAuth();

  return authState.isUserLogin && authState.credVerificationStatus ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate replace state={{ from: path }} {...props} to="/login" />
  );
}
