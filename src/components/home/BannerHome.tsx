// ** Import React
import React from "react";

// ** Import Assets
import assets from "../../assets/assets";

// ** Import Other
import Lottie from "lottie-react";

const BannerHome = () => {
  return (
    <div className="h-screen absolute bg-[#131517] w-full top-0 -z-10">
      <Lottie animationData={assets.home} style={{ height: 625 }} />

      <div className="absolute bottom-[4rem] left-0 right-0 flex flex-col gap-1 items-center justify-center text-white/80 ">
        <h1 className=" text-3xl font-bold">Welcome to Gengs App</h1>

        <p className="font-semibold">Community Tersolid Di Bumi</p>
      </div>
    </div>
  );
};

export default BannerHome;
