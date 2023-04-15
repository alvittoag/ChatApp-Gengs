// ** Import Other
import {
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const DropdownUser = () => {
  return (
    <div className="absolute right-[55px] top-20 bg-[#212329] w-[170px] h-[110px] rounded-2xl px-1">
      <div className="px-5 py-4 space-y-6 text-white/90 ">
        <Link to="/user-page" className="flex gap-3">
          <UserCircleIcon className="h-6 w-6 text-white/80" />

          <h5>Profile</h5>
        </Link>

        <div className="flex gap-3">
          <ArrowLeftOnRectangleIcon className="h-6 w-6 text-white/80" />

          <h5>Logout</h5>
        </div>
      </div>
    </div>
  );
};

export default DropdownUser;
