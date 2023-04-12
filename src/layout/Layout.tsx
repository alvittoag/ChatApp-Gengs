// ** Import React
import React from "react";

// ** Import Recoil
import { useRecoilValue } from "recoil";
import { sidebar } from "../recoil/sidebar";
import { infoUser } from "../recoil/info-users.";

// ** Import Components
import Sidebar from "../components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  //  ** Recoil State
  const isSidebarClose = useRecoilValue(sidebar);
  const isInfoUser = useRecoilValue(infoUser);

  return (
    <div className="flex text-white h-[100vh] overflow-hidden">
      <div
        className={`bg-[#212329]  ${
          isSidebarClose
            ? "w-[7rem] duration-500"
            : "w-[26rem] duration-500 transition-all"
        } border-r-2 border-gray-700`}
      >
        <Sidebar />
      </div>

      <div className="flex-1">
        <div className=" bg-[#131517]">{children}</div>
      </div>

      {isInfoUser && (
        <div
          className="bg-[#212329] w-[21rem] border-l-2 duration-500
            border-gray-700"
        >
          <p className="py-6 text-center ">Still Progress</p>
        </div>
      )}
    </div>
  );
};

export default Layout;
