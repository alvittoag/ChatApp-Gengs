// ** Import React
import { useState } from "react";

// ** Import Service
import { postChat } from "../../service/api/PostChat";

//  ** Import Other
import { useMutation } from "@apollo/client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { toast } from "react-hot-toast";

type Props = {
  channel_id: number;
};

const ChatInput = ({ channel_id }: Props) => {
  // ** Local State
  const [message, setmessage] = useState("");

  const [sendChat, { loading }] = useMutation(postChat);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      user_id: 1,
      message,
      channel_id,
    };

    sendChat({
      variables: {
        object: payload,
      },
    }).then(() =>
      toast.success("Pesan terkirim", {
        style: { backgroundColor: "#131517", color: "white" },
      })
    );

    setmessage("");
  };

  return (
    <div className="absolute bg-[#212329] bottom-[70px] w-full py-4 px-12">
      <form className="flex items-center" onSubmit={handleSendChat}>
        <input
          type="text"
          placeholder="Ketik pesanmu disini..."
          className="w-full focus:outline-none bg-transparent"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        <button
          onClick={handleSendChat}
          disabled={loading}
          className="text-white font-bold px-4 py-2 rounded bg-[#2A9EF4] mb-1 disabled:bg-gray-400"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
