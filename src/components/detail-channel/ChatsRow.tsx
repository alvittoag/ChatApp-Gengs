// ** Import React
import React from "react";

// ** Import Models
import { IMessagesInfo } from "../../models/channel";

// ** Import Other
import { userLocalStorage } from "../../helpers/user-localstorage";
import LazyLoad from "react-lazy-load";

type Props = {
  data: IMessagesInfo;
};

const ChatsRow = ({ data }: Props) => {
  const { username } = userLocalStorage();

  return (
    <React.Fragment>
      <div
        key={data.id}
        className={`flex gap-5 items-start ${
          data.user.username === username &&
          "flex flex-row-reverse item gap-4 items-start"
        }`}
      >
        <LazyLoad threshold={0.95}>
          <img
            src={data.user.image}
            className="rounded-full w-[3rem] object-cover h-[3rem]"
          />
        </LazyLoad>

        <div className="flex flex-col items-start">
          <div className="w-full ">
            <h1
              className={`font-semibold ${
                data.user.username === username && "text-end"
              }`}
            >
              {data.user.username === username ? "You" : data.user.username}
              {data.user.username === "admin" && " 👑"}
            </h1>
          </div>

          <div className="bg-[#212329] mt-2 -ml-1 py-3 px-5 rounded-md max-w-md">
            <p className="text-white/980">{data.message}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatsRow;
