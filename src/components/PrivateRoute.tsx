// ** Import Other
import { Navigate, Outlet } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    Swal.fire("Gagal", "Token tidak valid", "error");
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoute;
