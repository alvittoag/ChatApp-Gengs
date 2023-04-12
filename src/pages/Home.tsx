// ** Import components
import BannerHome from "../components/home/BannerHome";
import HeadHome from "../components/home/HeadHome";

const Home = () => {
  return (
    <div className="relative">
      <HeadHome />
      <div className="h-[100vh]">
        <BannerHome />
      </div>
    </div>
  );
};

export default Home;
