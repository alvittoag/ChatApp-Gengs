// ** Import Assets

// ** Import Other
import Lottie from "lottie-react";
import assets from "../../../assets/assets";

const NotFoundChats = () => {
  return (
    <div>
      <Lottie animationData={assets.notFound} style={{ height: 340 }} />
      <h1 className="text-center font-semibold text-lg text-white/80">
        Channel ini belum memiliki pesan
      </h1>
    </div>
  );
};

export default NotFoundChats;
