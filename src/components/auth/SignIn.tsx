// ** Import Globals
import Title from "../../globals/Title";
import InputUser from "../../globals/InputUser";

// ** Import Other
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

type Props = {
  handleSignUp: () => void;
};

const dummy = [];

const SignIn = ({ handleSignUp }: Props) => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (dummy.length >= 1) {
      Swal.fire("Berhasil", "Berhasil Login", "success");

      localStorage.setItem("token", "12345");

      navigate("/home");
    } else {
      Swal.fire("Gagal Sign In", "Username atau Password Salah", "error");
    }
  };

  return (
    <div className="w-[34rem]">
      <Title align="text-center" size="text-[30px]" />

      <div className="mt-10 px-10 space-y-10">
        <h1 className="font-semibold text-2xl">Sign In</h1>

        <InputUser
          label="username"
          type="text"
          placeholder="alvittoag1945"
          icon={
            <UserIcon className="h-4 w-5 absolute top-[13.3px] left-3 text-gray-500" />
          }
        />

        <InputUser
          label="password"
          type="password"
          placeholder="xxxxxxxxxxxx"
          icon={
            <LockClosedIcon className="h-4 w-5 absolute top-[13.3px] left-3 text-gray-500" />
          }
        />

        <div className="space-y-5">
          <button
            onClick={handleSignIn}
            className="bg-[#2A9EF4] py-[10px]  w-full rounded-md font-medium"
          >
            Sign In
          </button>
          <p className="text-gray-400 text-sm">
            Don't have an account ?{" "}
            <span
              className="text-sm text-[#2A9EF4] cursor-pointer"
              onClick={handleSignUp}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
