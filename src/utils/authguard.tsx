import { Navigate } from "react-router-dom";
import ReFont from "../modules/views/refont/refont";

const AuthGuard = ({ children = <ReFont /> }) => {
  if (!localStorage.getItem("bearer")) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default AuthGuard;
