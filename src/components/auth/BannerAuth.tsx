// ** Import Assets
import assets from "../../assets/assets";

// ** Import Other
import Lottie from "lottie-react";
type Props = {
  signUp: boolean;
};

const BannerAuth = ({ signUp }: Props) => {
  return (
    <div className="bg-[#2A9EF4] -ml-5 w-[32rem] rounded-3xl text-center py-6 relative text-gray-50">
      <h1 className="font-bold text-xl max-w-xs mx-auto ">
        {signUp
          ? "Segera Buat Akunmu dan Temukan Community Terbaik"
          : " Perkumpulan Community Tersolid di Muka Bumi"}
      </h1>

      <Lottie
        animationData={signUp ? assets.auth2 : assets.auth}
        style={{ height: 300, marginTop: 20 }}
      />

      <h1 className="font-bold text-xl mt-3">
        {signUp ? "Ayo Join Sekarang" : "Temukan Kenalan Baru"}
      </h1>
    </div>
  );
};

export default BannerAuth;
