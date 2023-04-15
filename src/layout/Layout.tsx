// ** Import React
import React from "react";

// ** Import Recoil
import { useRecoilValue } from "recoil";
import { toggleInfoUser, toggleSideBar } from "../recoil/toggle";

// ** Import Components
import Sidebar from "../components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
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

      <div className="flex-1">
        <div className=" bg-[#131517]">{children}</div>
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

export default Layout;
