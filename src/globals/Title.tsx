// ** Import Recoil
import { useSetRecoilState } from "recoil";
import { toggleInfoChannel } from "../recoil/toggle";

import { navigation } from "../recoil/navigation";

// ** Import Other
import { useNavigate } from "react-router-dom";

type Props = {
  link?: string;
  align?: string;
  size?: string;
};

const Title = (props: Props) => {
  const { link, align, size } = props;

  // ** Recoil Set State
  const setNavigationId = useSetRecoilState(navigation);
  const setInfoChannel = useSetRecoilState(toggleInfoChannel);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(link ?? "");
    setNavigationId(0);
    setInfoChannel(false);
  };

  return (
    <div className="cursor-pointer" onClick={handleNavigate}>
      <h1 className={` ${size ?? "text-[27px]"} font-bold ${align} `}>
        Gengs <span className="text-[#2A9EF4]">App</span>
      </h1>
    </div>
  );
};

export default Title;
