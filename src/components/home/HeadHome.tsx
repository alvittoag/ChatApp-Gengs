// ** Import Reacts
import { useState } from "react";

// ** Import Heroicons
import { CalendarIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const HeadHome = () => {
  // ** Local State
  const [dateTime, setDateTime] = useState<string>("");

  setInterval(() => {
    setDateTime(new Date().toLocaleString());
  }, 1000);

  return (
    <div className="absolute flex justify-between w-full py-5 px-14 font-semibold text-white/80 text-sm tracking-wide items-center">
      <div className="flex items-center gap-3">
        <CalendarIcon className="h-5 w-5" />
        <h1>
          {dateTime.length === 0 ? new Date().toLocaleString() : dateTime}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-4">
          <p>Hi, alvittoag</p>
          <img
            src="https://scontent.fcgk33-1.fna.fbcdn.net/v/t39.30808-6/243071809_1287191601725486_3971480056077451387_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=gcGjlg3igYgAX_EzQhx&_nc_ht=scontent.fcgk33-1.fna&oh=00_AfBqcr0y49QqLyVBTICCr-ubNSyZyY9oA5YRFXCwlxsCYQ&oe=6439ECA8"
            className="rounded-full w-[42px] object-cover"
          />
        </div>

        <ChevronDownIcon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default HeadHome;
