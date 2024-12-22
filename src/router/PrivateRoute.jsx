import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user,loading } = useContext(AuthContext);
  const location = useLocation();
  if (user && user?.email) {
    return children;
  } 
  else if(loading){
    return <div className="flex justify-center items-center mb-64"><span className="loading loading-infinity loading-lg"></span></div>
    // return
  }else {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
}