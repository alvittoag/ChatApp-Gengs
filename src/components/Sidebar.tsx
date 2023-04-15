// ** Import React
import React from "react";

// ** Import Components
import Channel from "./Channel";

// ** Import Elements
import Title from "../elements/Title";

// ** Import Recoil
import { useRecoilState } from "recoil";
import { toggleSideBar } from "../recoil/toggle";

// ** Import Other
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  // ** Recoil State
  const [sidebar, setSidebar] = useRecoilState(toggleSideBar);

  const handleSidebarClose = (isClose: boolean) => {
    setSidebar(isClose);
  };

  return (
    <div className={`py-5 ${sidebar && "space-y-9"}`}>
      <div className="px-8 flex justify-between items-center">
        {sidebar ? (
          <div
            onClick={() => handleSidebarClose(false)}
            className={`bg-[#2A9EF4] px-3 py-2 rounded-lg cursor-pointer ${
              sidebar && "ml-1"
            } `}
          >
            <ChevronDoubleRightIcon className="h-6 w-6" />
          </div>
        ) : (
          <React.Fragment>
            <Title link={"/"} />

            <div
              onClick={() => setSidebar(true)}
              className="bg-[#2A9EF4] px-3 py-2 rounded-lg cursor-pointer"
            >
              <ChevronDoubleLeftIcon className="h-6 w-6 font-bold" />
            </div>
          </React.Fragment>
        )}
      </div>

      {!sidebar && (
        <div className="px-8 mt-6 mb-7 ">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari Channel..."
              className="w-full bg-[#212329] py-[8px] px-3 rounded-md text-gray-300 ring-1 ring-gray-600 shadow-xl placeholder:text-gray-500 font-medium "
            />

            <MagnifyingGlassIcon className="absolute right-4 top-[9px] w-5 h-5 text-gray-400 " />
          </div>
        </div>
      )}

      <Channel />
    </div>
  );
};

export default Sidebar;
