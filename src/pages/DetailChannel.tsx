// ** Import React
import React from "react";

// ** Import Components
import HeadChannel from "../components/detail-channel/HeadChannel";
import Chats from "../components/detail-channel/Chats";

const DetailChannel = () => {
  return (
    <React.Fragment>
      <div className=" bg-[#212329]  py-4 px-32">
        <HeadChannel />
      </div>

      <div className="text-white py-10 px-32 overflow-y-auto max-h-screen">
        <Chats />
      </div>
    </React.Fragment>
  );
};

export default DetailChannel;
