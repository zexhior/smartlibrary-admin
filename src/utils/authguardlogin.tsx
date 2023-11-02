import { Navigate } from "react-router-dom";

interface AuthGuardLoginProps {
  children: JSX.Element;
}

const AuthGuardLogin: React.FC<AuthGuardLoginProps> = ({ children }) => {
  if (localStorage.getItem("bearer")) {
    return <Navigate to="/" />;
  }
  return children;
};

export default AuthGuardLogin;
