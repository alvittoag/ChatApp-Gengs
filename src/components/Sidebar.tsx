// ** Import React
import { useState } from "react";

// ** Import Elements
import Title from "../elements/Title";

// ** Import Recoil
import { useRecoilValue, useSetRecoilState } from "recoil";
import { headChannel } from "../recoil/head-channel";
import { sidebar } from "../recoil/sidebar";

// ** Import 3rd Party
import { Link } from "react-router-dom";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  // ** Recoil State
  const isSidebarClose = useRecoilValue(sidebar);

  // ** Recoil Set State
  const setHeadChannel = useSetRecoilState(headChannel);
  const setSidebarClose = useSetRecoilState(sidebar);

  // ** Local State
  const [active, setActive] = useState<string>("");

  const handleActive = (data: { name: string; image: string }) => {
    setActive(data.name);
    setHeadChannel(data);
  };

  const handleSidebarClose = (isClose: boolean) => {
    setSidebarClose(isClose);
  };

  return (
    <div className={`py-5 ${isSidebarClose && "space-y-9"}`}>
      <div className="px-8 flex justify-between items-center">
        {isSidebarClose ? (
          <div
            onClick={() => handleSidebarClose(false)}
            className={`bg-[#2A9EF4] px-3 py-2 rounded-lg cursor-pointer ${
              isSidebarClose && "ml-1"
            } `}
          >
            <ChevronDoubleRightIcon className="h-6 w-6" />
          </div>
        ) : (
          <>
            <Title link={"/"} />

            <div
              onClick={() => setSidebarClose(true)}
              className="bg-[#2A9EF4] px-3 py-2 rounded-lg cursor-pointer"
            >
              <ChevronDoubleLeftIcon className="h-6 w-6" />
            </div>
          </>
        )}
      </div>

      {!isSidebarClose && (
        <div className="px-8 mt-6 mb-7 ">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari Channel..."
              className="w-full bg-[#212329] py-[8px] px-3 rounded-md text-gray-300 ring-1 ring-gray-600 shadow-xl placeholder:text-gray-500 font-medium "
            />
            <MagnifyingGlassIcon className="absolute right-4 top-[9px] w-5 h-5 text-gray-400 " />
          </div>
        </div>
      )}

      <div className=" space-y-10">
        {dummyData.map((data) => (
          <Link
            to={`channel/${data.name}`}
            onClick={() => handleActive(data)}
            className="flex items-center gap-4 cursor-pointer px-2"
            key={data.name}
          >
            <div className="flex items-center gap-3">
              {active === data.name ? (
                <ChevronRightIcon className="h-4 w-4 " />
              ) : (
                <div className="w-[1rem]"></div>
              )}

              <img
                src={data.image}
                className="rounded-full w-[3rem] h-[3rem] object-cover"
              />
            </div>

            {!isSidebarClose && (
              <div>
                <h1 className="font-[600] text-white/90">{data.name}</h1>

                <p className="text-sm font-medium text-white/80">3 Chats</p>
              </div>
            )}
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
    name: "Pasukan Orange Masyarakat",
    image:
      "https://id-test-11.slatic.net/p/4efed53b0fd06a7bff861193b817945c.jpg",
  },
  {
    name: "Zetsu Putih Monas",
    image:
      "https://cdn1-production-images-kly.akamaized.net/trVW_J0TRMraaMiX62SPDaEet4Q=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4055097/original/016998500_1655374341-Monas-Kembali-Dibuka-Secara-Bertahap-IQBAL-3.jpg",
  },
  {
    name: "King Madrid Anti Decul",
    image:
      "https://pict.sindonews.net/webp/480/pena/news/2023/04/06/11/1065619/real-madrid-ke-final-copa-del-rey-usai-kalahkan-barcelona-03-lme.webp",
  },
];
