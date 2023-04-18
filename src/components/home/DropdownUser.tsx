// ** Import Recoil
import { useSetRecoilState } from "recoil";
import { toggleUser } from "../../recoil/toggle";

// ** Import Other
import {
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DropdownUser = () => {
  // ** Recoil Set State
  const setDropdown = useSetRecoilState(toggleUser);

  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Anda yakin ingin logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2E9DF1",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sangat Yakin",
      cancelButtonText: "Batalin",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();

        navigate("/");

        setDropdown(false);
      }
    });
  };

  return (
    <div className="absolute right-[55px] top-20 bg-[#212329] w-[170px] h-[110px] rounded-2xl px-1">
      <div className="px-5 py-4 space-y-6  ">
        <Link
          to="/profile"
          onClick={() => setDropdown(false)}
          className="flex gap-3 text-white/90"
        >
          <UserCircleIcon className="h-6 w-6 text-white/80" />

          <h5>Profile</h5>
        </Link>

        <div
          onClick={handleLogout}
          className="flex gap-3 text-red-600 font-semibold cursor-pointer"
        >
          <ArrowLeftOnRectangleIcon className="h-6 w-6" />

          <h5>Logout</h5>
        </div>
      </div>
    </div>
  );
};

export default DropdownUser;
