// ** Import Recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { headChannel } from "../../recoil/head-channel";
import { infoUser } from "../../recoil/info-users.";

// ** Import 3rd Party
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const HeadChannel = () => {
  // Recoil State
  const data = useRecoilValue(headChannel);
  const isInfoUser = useRecoilValue(infoUser);

  // Recoil Set State
  const setInfoUser = useSetRecoilState(infoUser);

  const handleInfoUser = () => {
    setInfoUser(!isInfoUser);
  };

  return (
    <div className="flex justify-between items-center">
      <div className=" flex items-center gap-3">
        <img
          src={data.image}
          alt={data.name}
          className="rounded-full w-[43px] h-[43px] object-cover"
        />
        <div className=" text-sm font-semibold">
          <h1>{data.name}</h1>
          <p className="text-white/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div onClick={handleInfoUser}>
        {isInfoUser ? (
          <ChevronRightIcon className="h-7 w-7 cursor-pointer" />
        ) : (
          <EllipsisVerticalIcon className="h-7 w-7 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default HeadChannel;
