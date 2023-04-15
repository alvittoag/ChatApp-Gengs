// ** Import React
import React from "react";

// ** Import Models
import { IMessagesInfo } from "../../models/Channel";

type Props = {
  data: IMessagesInfo;
};

const ChatsRow = ({ data }: Props) => {
  return (
    <React.Fragment>
      <div
        key={data.message}
        className={`flex gap-5 items-start ${
          data.user.username === "Alvittoag" &&
          "flex flex-row-reverse item gap-4 items-start"
        }`}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4lOAcJMgUICw28NgVkLjxm1Fv7eOsgBher2X9Efr7r9jizSSd9TKTMbM4_fLN5XeLt8&usqp=CAU"
          className="rounded-full w-[3rem] object-cover h-[3rem]"
        />

        <div>
          <h1
            className={`font-semibold ${
              data.user.username === "Alvittoag" && "text-end"
            }`}
          >
            {data.user.username === "Alvittoag" ? "You" : data.user.username}
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
