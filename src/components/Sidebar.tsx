// ** Import React
import { useState } from "react";

// ** Import Elements
import Title from "../elements/Title";

// ** Import 3rd Party
import { Link } from "react-router-dom";

// ** Import Recoil
import { useSetRecoilState } from "recoil";
import { headChannel } from "../recoil/head-channel";

const Sidebar = () => {
  // ** Recoil Set State
  const setHeadChannel = useSetRecoilState(headChannel);

  // ** Local State
  const [active, setActive] = useState<string>("");

  const handleActive = (data: { name: string; image: string }) => {
    setActive(data.name);
    setHeadChannel(data);
  };

  return (
    <div className="py-6 space-y-12">
      <Title link={"/"} />

      <div className=" space-y-10 px-8">
        {dummyData.map((data) => (
          <Link
            to={`channel/${data.name}`}
            onClick={() => handleActive(data)}
            className="flex items-center gap-4 cursor-pointer"
            key={data.name}
          >
            <img src={data.image} className="rounded-full w-[3rem] h-[3rem]" />
            <div>
              <h1 className="font-[600] text-white/90">{data.name}</h1>

              <p className="text-sm font-medium text-white/80">3 Chats</p>

              {active === data.name && (
                <div className="border-b-2 px-1 py-1 border-gray-400"></div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

interface IDummyData {
  name: string;
  image: string;
}

const dummyData: IDummyData[] = [
  {
    name: "Tentara Orange",
    image:
      "https://id-test-11.slatic.net/p/4efed53b0fd06a7bff861193b817945c.jpg",
  },
  {
    name: "Zetsu Putih",
    image:
      "https://cdn1-production-images-kly.akamaized.net/trVW_J0TRMraaMiX62SPDaEet4Q=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4055097/original/016998500_1655374341-Monas-Kembali-Dibuka-Secara-Bertahap-IQBAL-3.jpg",
  },
  {
    name: "King Madrid",
    image:
      "https://pict.sindonews.net/webp/480/pena/news/2023/04/06/11/1065619/real-madrid-ke-final-copa-del-rey-usai-kalahkan-barcelona-03-lme.webp",
  },
];
