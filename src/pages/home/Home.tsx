// ** Import components
import { useRecoilValue } from "recoil";
import BannerHome from "../../components/home/BannerHome";
import DropdownUser from "../../components/home/DropdownUser";

// ** Import Recoil
import HeadHome from "../../components/home/HeadHome";
import { toggleUser } from "../../recoil/toggle";

const Home = () => {
  // ** Recoil State
  const dropdownUser = useRecoilValue(toggleUser);

  return (
    <div className="relative">
      <HeadHome />

      {dropdownUser && <DropdownUser />}

      <BannerHome />
    </div>
  );
};

export default Home;
