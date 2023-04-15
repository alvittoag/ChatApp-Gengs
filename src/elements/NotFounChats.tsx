// ** Import Assets
import assets from "../assets/assets";

// ** Import Other
import Lottie from "lottie-react";

const NotFounChats = () => {
  return (
    <div>
      <Lottie animationData={assets.notFound} style={{ height: 340 }} />
      <h1 className="text-center font-semibold text-lg text-white/80">
        Channel ini belum memiliki pesan
      </h1>
    </div>
  );
};

export default NotFounChats;
