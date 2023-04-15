// ** Import Reacts
import { useState } from "react";

// ** Import Recoil
import { useRecoilState } from "recoil";
import { toggleUser } from "../../recoil/toggle";

// ** Import Other
import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

const HeadHome = () => {
  // ** Recoil State
  const [dropdownUser, setDropdownUser] = useRecoilState(toggleUser);

  // ** Local State
  const [dateTime, setDateTime] = useState<string>("");

  setInterval(() => {
    setDateTime(new Date().toLocaleString());
  }, 1000);

  const handleDropdown = () => {
    setDropdownUser(!dropdownUser);
  };

  return (
    <div className="flex justify-between w-full py-5 px-14 font-semibold text-white/80 text-sm tracking-wide items-center z-10">
      <div className="flex items-center gap-3">
        <CalendarIcon className="h-5 w-5" />
        <h1>
          {dateTime.length === 0 ? new Date().toLocaleString() : dateTime}
        </h1>
      </div>

      <div
        onClick={handleDropdown}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <p onClick={handleDropdown}>Hi, alvittoag</p>

          <img
            src="https://scontent.fcgk33-1.fna.fbcdn.net/v/t39.30808-6/243071809_1287191601725486_3971480056077451387_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=gcGjlg3igYgAX_EzQhx&_nc_ht=scontent.fcgk33-1.fna&oh=00_AfBqcr0y49QqLyVBTICCr-ubNSyZyY9oA5YRFXCwlxsCYQ&oe=6439ECA8"
            className="rounded-full w-[42px] object-cover"
          />
        </div>

        {dropdownUser ? (
          <ChevronUpIcon className="w-5 h-5" />
        ) : (
          <ChevronDownIcon className="w-5 h-5" />
        )}
      </div>
    </div>
  );
};

export default HeadHome;
