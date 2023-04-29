// ** Import components
import { useRecoilValue } from "recoil";
import BannerHome from "../../components/home/BannerHome";
import DropdownUser from "../../components/home/DropdownUser";
import HeadHome from "../../components/home/HeadHome";
import TitlePage from "../../globals/TitlePage";

// ** Import Recoil
import { toggleDropdown } from "../../recoil/toggle";

const Home = () => {
  // ** Recoil State
  const dropdownUser = useRecoilValue(toggleDropdown);

  return (
    <div className="relative">
      <TitlePage title="Home" />

      <HeadHome />

      {dropdownUser && <DropdownUser />}

      <BannerHome />
    </div>
  );
};

export default Home;
