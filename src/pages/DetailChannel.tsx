// ** Import React
import React from "react";

// ** Import Components
import HeadChannel from "../components/detail-channel/HeadChannel";
import Chats from "../components/detail-channel/Chats";

const DetailChannel = () => {
  return (
    <React.Fragment>
      <div className=" bg-[#212329] py-4 px-12">
        <HeadChannel />
      </div>

      <div className="flex flex-col text-white py-10 px-12 h-[100vh] overflow-y-auto">
        <Chats />
        <span className="mt-20">.</span>
      </div>
    </React.Fragment>
  );
};

export default DetailChannel;
