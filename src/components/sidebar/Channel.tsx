// ** Import Recoil
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { navigation } from "../../recoil/navigation";
import { toggleSideBar } from "../../recoil/toggle";
import { searchChannel } from "../../recoil/search-channel";
import { infoChannel } from "../../recoil/info-channel";
import { toggleInfoChannel } from "../../recoil/toggle";

// ** Import Components
import NotFoundChannel from "./notfound-channel/NotFoundChannel";

// ** Import Models
import { IResApi } from "../../models/responseApi";
import { IResChannel } from "../../models/channel";

// ** Import Service
import { getChannel } from "../../services/query/GetChannel";

// ** Import Other
import { useSubscription } from "@apollo/client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import LoadingChannel from "../../globals/LoadingChannel";
import { capitalize } from "../../helpers/convert-capitalize";
import LazyLoad from "react-lazy-load";

const Channel = () => {
  // ** Recoil State
  const [navigationId, setNavigationId] = useRecoilState(navigation);
  const sidebar = useRecoilValue(toggleSideBar);
  const search = useRecoilValue(searchChannel);
  const setInfoChannel = useSetRecoilState(infoChannel);
  const setInfoSidebar = useSetRecoilState(toggleInfoChannel);

  const { data, loading } = useSubscription<IResApi>(getChannel, {
    variables: { value: `%${capitalize(search)}%` },
  });

  const handleNavigation = (data: IResChannel) => {
    setNavigationId(data.id);
    setInfoChannel(data);
    setInfoSidebar(false);
  };

  return (
    <div className="space-y-10">
      {data?.channels.length === 0 && <NotFoundChannel />}

      {loading && (
        <div className="px-9 flex flex-col gap-8">
          <LoadingChannel
            count={3}
            widthTitle="w-64"
            widthSubtitle="w-16"
            widthImage="w-[3rem]"
            heightImage="h-[3rem]"
          />
        </div>
      )}

      {data?.channels.map((data) => (
        <Link
          to={`channel/${data.id}`}
          onClick={() => handleNavigation(data)}
          className="flex items-center gap-4 cursor-pointer px-2"
          key={data.id}
        >
          <div className="flex items-center gap-3">
            {navigationId === data.id ? (
              <ChevronRightIcon className="h-4 w-4 font-bold" />
            ) : (
              <div className="w-[1rem]"></div>
            )}

            <LazyLoad threshold={0.95}>
              <img
                src={data.image}
                className="rounded-full w-[3rem] h-[3rem] object-cover"
              />
            </LazyLoad>
          </div>

          {!sidebar && (
            <div>
              <h1 className={`font-[600] text-white/90`}>{data.name}</h1>

              <p className="text-sm font-medium text-white/80">
                {data.messages_info.length} Chats
              </p>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Channel;
