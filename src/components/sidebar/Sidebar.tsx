// ** Import React
import React from "react";

// ** Import Components
import Channel from "./Channel";
import InputSearch from "./InputSearch";
import AddChannel from "../admin/AddChannel";

// ** Import Recoil
import { useRecoilState } from "recoil";
import { toggleSideBar } from "../../recoil/toggle";

// ** Import Other
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import Title from "../../globals/Title";
import { userLocalStorage } from "../../helpers/user-localstorage";

const Sidebar = () => {
  // ** Recoil State
  const [sidebar, setSidebar] = useRecoilState(toggleSideBar);

  const { username } = userLocalStorage();

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
            <Title link={"/home"} />

            <div
              onClick={() => setSidebar(true)}
              className="bg-[#2A9EF4] px-3 py-2 rounded-lg cursor-pointer"
            >
              <ChevronDoubleLeftIcon className="h-6 w-6 font-bold" />
            </div>
          </React.Fragment>
        )}
      </div>

      {!sidebar && <InputSearch />}

      <div className="relative h-screen">
        <Channel />
        {username === "admin" && <AddChannel sidebar={sidebar} />}
      </div>
    </div>
  );
};

export default Sidebar;
