import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  const location = useLocation();
  return isLoggedin ? (
    <Navigate to={location?.state || "/contacts"} />
  ) : (
    children
  );
};

export default PublicRoute;
