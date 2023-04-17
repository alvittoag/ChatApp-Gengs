// ** Import React
import React from "react";

// ** Import Models
import { IMessagesInfo } from "../../models/Channel";
import { IUser } from "../../models/User";

type Props = {
  data: IMessagesInfo;
};

const ChatsRow = ({ data }: Props) => {
  const userObj: any = localStorage.getItem("user");

  const user: IUser = JSON.parse(userObj);

  return (
    <React.Fragment>
      <div
        key={data.message}
        className={`flex gap-5 items-start ${
          data.user.username === user.username &&
          "flex flex-row-reverse item gap-4 items-start"
        }`}
      >
        <img
          src={data.user.image}
          className="rounded-full w-[3rem] object-cover h-[3rem]"
        />

        <div>
          <h1
            className={`font-semibold ${
              data.user.username === user.username && "text-end"
            }`}
          >
            {data.user.username === user.username ? "You" : data.user.username}
          </h1>

          <div className="bg-[#212329] mt-2 -ml-1 py-3 px-5 rounded-md max-w-md">
            <p className="text-white/980">{data.message}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChatsRow;
