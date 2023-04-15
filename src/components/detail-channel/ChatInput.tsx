//  ** Import Other
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const ChatInput = () => {
  return (
    <div className="absolute bg-[#212329] bottom-[70px] w-full py-4 px-12">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Ketik pesanmu disini..."
          className="w-full focus:outline-none bg-transparent"
        />
        <button className="text-white font-bold px-4 py-2 rounded bg-[#2A9EF4] mb-1">
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
