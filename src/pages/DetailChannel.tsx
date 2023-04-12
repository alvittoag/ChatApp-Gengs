// ** Import Components
import HeadChannel from "../components/detail-channel/HeadChannel";
import ChatInput from "../components/detail-channel/ChatInput";
import ChatsRow from "../components/detail-channel/ChatsRow";

const DetailChannel = () => {
  return (
    <div className="relative">
      <div className=" bg-[#212329] py-4 px-12">
        <HeadChannel />
      </div>

      <div className="flex flex-col text-white  h-[100vh]">
        <ChatsRow />
        <span className="mt-36"></span>
      </div>

      <div className="absolute bg-[#212329] bottom-[70px] w-full py-4 px-12">
        <ChatInput />
      </div>
    </div>
  );
};

export default DetailChannel;
