// ** Import React
import React from "react";

// ** Import Components
import Sidebar from "../components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100vh] flex text-white ">
      <div className="bg-[#212329] w-[17rem] border-r-2 border-gray-700">
        <Sidebar />
      </div>
      <div className="flex-1">
        <div className=" bg-[#131517] h-[100vh] ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
