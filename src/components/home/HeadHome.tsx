// ** Import React
import { useState } from "react";

// ** Import Recoil
import { useRecoilState } from "recoil";
import { toggleUser } from "../../recoil/toggle";

// ** Import Models
import { IUser } from "../../models/User";

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

  const userObj: any = localStorage.getItem("user");

  const user: IUser = JSON.parse(userObj);

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
          <p onClick={handleDropdown}>Hi, {user.username}</p>

          <img
            src={user.image}
            className="rounded-full w-[42px] h-[42px] object-cover"
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
