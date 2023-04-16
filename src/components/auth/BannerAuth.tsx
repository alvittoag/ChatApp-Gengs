// ** Import Assets
import assets from "../../assets/assets";

// ** Import Other
import Lottie from "lottie-react";

const BannerAuth = () => {
  return (
    <div className="bg-[#2A9EF4] -ml-5 w-[32rem] rounded-3xl text-center py-6 relative text-gray-50">
      <h1 className="font-bold text-xl max-w-xs mx-auto ">
        Perkumpulan Community Tersolid di Muka Bumi
      </h1>
      <Lottie
        animationData={assets.auth}
        style={{ height: 300, marginTop: 20 }}
      />
      <h1 className="font-bold text-xl mt-3">Ayo Join Sekarang</h1>
    </div>
  );
};

export default BannerAuth;
