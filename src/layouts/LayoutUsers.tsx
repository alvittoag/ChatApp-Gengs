// ** Import Recoil
import { useRecoilValue } from "recoil";
import { toggleInfoChannel, toggleSideBar } from "../recoil/toggle";

// ** Import Components
import Sidebar from "../components/sidebar/Sidebar";
import InfoChannel from "../components/sidebar/InfoChannel";

// ** import Other
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const LayoutUsers = () => {
  //  ** Recoil State
  const sideBar = useRecoilValue(toggleSideBar);
  const infoChannel = useRecoilValue(toggleInfoChannel);

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

      {infoChannel && (
        <div className="bg-[#212329] w-[21rem] border-l-2 border-gray-700">
          <InfoChannel sideChannel={infoChannel} />
        </div>
      )}
    </div>
  );
};

export default LayoutUsers;
