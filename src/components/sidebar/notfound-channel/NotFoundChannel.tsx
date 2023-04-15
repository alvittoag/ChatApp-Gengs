// ** Import Assets
import assets from "../../../assets/assets";

// ** Import Other
import Lottie from "lottie-react";

const NotFoundChannel = () => {
  return (
    <Lottie
      animationData={assets.notFoundChannel}
      style={{ height: "300px" }}
    />
  );
};

export default NotFoundChannel;
