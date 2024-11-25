import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ redirectTo, children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("PrivateRoute - isLoggedIn:", isLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
