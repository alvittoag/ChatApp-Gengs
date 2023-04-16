// ** Import React
import React from "react";

// ** Import Recoil
import { useRecoilValue } from "recoil";
import { toggleInfoUser, toggleSideBar } from "../recoil/toggle";

// ** Import Components
import Sidebar from "../components/sidebar/Sidebar";

// ** import Other
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const LayoutUsers = () => {
  //  ** Recoil State
  const sideBar = useRecoilValue(toggleSideBar);
  const isInfoUser = useRecoilValue(toggleInfoUser);

  return (
    <div className="flex text-white h-[100vh] overflow-hidden">
      <div
        className={`bg-[#212329]  ${
          sideBar ? "w-[7rem] " : "w-[26rem]"
        } border-r-2 border-gray-700 duration-500`}
      >
        <Sidebar />
      </div>

      <Toaster position="top-right" />

      <div className="flex-1">
        <div className=" bg-[#131517]">
          <Outlet />
        </div>
      </div>

      <div
        className={`bg-[#212329] ${
          isInfoUser ? "w-[21rem] border-l-2" : "w-0 border-l-0"
        } duration-500
            border-gray-700`}
      >
        <p
          className={`py-6 text-center text ${
            isInfoUser ? "text-white" : "text-[#131517] ml-32 duration-200"
          } duration-500`}
        >
          Still Progress
        </p>
      </div>
    </div>
  );
};

export default LayoutUsers;
