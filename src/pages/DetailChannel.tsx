// ** Import React
import { useEffect } from "react";

// ** Import Components
import HeadChannel from "../components/detail-channel/HeadChannel";
import ChatInput from "../components/detail-channel/ChatInput";
import ChatsRow from "../components/detail-channel/ChatsRow";

// ** import Elements
import LoadingChannel from "../elements/LoadingChannel";
import LoadingChat from "../elements/LoadingChat";
import NotFounChats from "../elements/NotFounChats";

// ** Import Schema
import { IResApi } from "../schema/ResApi";

// ** Import Service
import { getChannelById } from "../service/api/GetChannel";

// ** Import Recoil
import { useSetRecoilState } from "recoil";
import { navigation } from "../recoil/navigation";

// ** Import Other
import { useParams } from "react-router-dom";
import { useSubscription } from "@apollo/client";

const DetailChannel = () => {
  // ** Recoil Set State
  const setNavigationId = useSetRecoilState(navigation);

  const { key: channel_id } = useParams();

  const { data, loading } = useSubscription<IResApi>(getChannelById, {
    variables: { channel_id },
  });

  const channel = data?.channels[0];

  useEffect(() => {
    setNavigationId(Number(channel_id));
  }, [channel_id]);

  return (
    <div className="relative">
      <div className=" bg-[#212329] py-4 px-12">
        {loading ? (
          <LoadingChannel
            count={1}
            widthTitle="w-52"
            widthSubtitle="w-96"
            widthImage="w-[43px]"
            heightImage="h-[43px]"
          />
        ) : (
          <HeadChannel channel_info={channel} />
        )}
      </div>

      <div className="flex flex-col text-white h-[100vh]">
        <div className="space-y-8 overflow-y-auto py-10 px-12">
          {loading && <LoadingChat />}

          {channel?.messages_info.length === 0 && <NotFounChats />}

          {channel?.messages_info.map((info) => (
            <ChatsRow data={info} key={info.id} />
          ))}
        </div>

        <span className="mt-36"></span>
      </div>

      <ChatInput />
    </div>
  );
};

export default DetailChannel;
