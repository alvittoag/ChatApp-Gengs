// ** Import Other
import { Outlet } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <div className="bg-[#212329] text-white h-[100vh] px-16 py-14 flex items-center">
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
