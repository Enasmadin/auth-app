// import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "./AuthContext";


// const RequriedAuth = ({children}) => {
//     const location = useLocation();
//     const {currentUser} =useAuth();
//     if(!currentUser){
//        return <Navigate   to="/signIn" state={{ path:location.pathname}} />
//     }
    
//   return  children;
// }

// export default RequriedAuth;
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();
  if (!currentUser) {
    return <Navigate  to="/signIn" state={{ path: location.pathname }} />;
  }
  return children;
};

export default RequireAuth;
