import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export const isAuth = (Component) => {
  const Wrapper = (props) => {
    const { isAuthenticated, user } = useAuthContext();
    return isAuthenticated  ? (
      <Component {...props} user={user}/>  
    ) : (
      <Navigate to="/login" />
    );
  };
  return Wrapper;
};
export default isAuth;