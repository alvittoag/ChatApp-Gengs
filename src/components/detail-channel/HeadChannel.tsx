// ** Import Recoil
import { useRecoilValue } from "recoil";
import { headChannel } from "../../recoil/head-channel";

const HeadChannel = () => {
  // Recoil State
  const data = useRecoilValue(headChannel);

  return (
    <div className="flex items-center gap-3">
      <img
        src={data.image}
        alt={data.name}
        className="rounded-full w-[3rem] h-[3rem]"
      />
      <h1 className="text-white/80 font-semibold text-lg">{data.name}</h1>
    </div>
  );
};

export default HeadChannel;
