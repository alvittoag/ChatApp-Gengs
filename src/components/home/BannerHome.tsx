// ** Import React
import React from "react";

// ** Import Assets
import bannerHome from "../../assets/home/bannerHome.json";

// ** Import 3rd Party
import Lottie from "lottie-react";

const BannerHome = () => {
  return (
    <React.Fragment>
      <Lottie animationData={bannerHome} style={{ height: 625 }} />
      <div className="absolute bottom-[4rem] left-0 right-0 flex flex-col gap-1 items-center justify-center text-white/80 ">
        <h1 className=" text-3xl font-bold">Welcome to Gengs App</h1>
        <p className="font-semibold">Community Tersolid Di Bumi</p>
      </div>
    </React.Fragment>
  );
};

export default BannerHome;
