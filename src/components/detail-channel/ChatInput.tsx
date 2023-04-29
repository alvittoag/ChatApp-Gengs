// ** Import React
import { useState } from "react";

// ** Import Service
import { postChat } from "../../services/query/PostChat";

//  ** Import Other
import { useMutation } from "@apollo/client";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { toast } from "react-hot-toast";
import { userLocalStorage } from "../../helpers/user-localstorage";
import Swal from "sweetalert2";

type Props = {
  channel_id: number;
};

const ChatInput = ({ channel_id }: Props) => {
  // ** Local State
  const [message, setmessage] = useState<string>("");

  const [sendChat, { loading }] = useMutation(postChat);

  const { id: user_id } = userLocalStorage();

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      user_id,
      message,
      channel_id,
    };

    sendChat({
      variables: {
        object: payload,
      },
    })
      .then(() => toast.success("Pesan terkirim"))
      .catch(() =>
        Swal.fire("Gagal", "Terjadi Kesalahan Pada Server", "error")
      );

    setmessage("");
  };

  return (
    <div className="absolute bg-[#212329] bottom-[70px] w-full py-4 px-12">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Ketik pesanmu disini..."
          className="w-full focus:outline-none bg-transparent"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        <button
          onClick={handleSendChat}
          disabled={loading || message.length === 0}
          className="text-white font-bold px-4 py-2 rounded bg-[#2A9EF4] mb-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
