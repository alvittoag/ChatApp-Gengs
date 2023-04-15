// ** Import Recoil
import { useSetRecoilState } from "recoil";
import { navigation } from "../recoil/navigation";

// ** Import Other
import { useNavigate } from "react-router-dom";

const Title = ({ link }: { link: string }) => {
  // ** Recoil Set State
  const setNavigationId = useSetRecoilState(navigation);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(link);
    setNavigationId(0);
  };

  return (
    <div className="cursor-pointer" onClick={handleNavigate}>
      <h1 className="text-[27px] font-bold">
        Gengs <span className="text-[#2A9EF4]">App</span>
      </h1>
    </div>
  );
};

export default Title;
