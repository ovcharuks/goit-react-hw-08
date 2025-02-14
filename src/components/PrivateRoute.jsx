import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLogedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  console.log(location);
  return isLogedIn ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
