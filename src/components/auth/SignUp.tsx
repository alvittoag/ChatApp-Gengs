// ** Import Global
import InputUser from "../../globals/InputUser";
import Title from "../../globals/Title";

// ** Import Other
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";

type Props = {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUp = ({ setIsSignUp }: Props) => {
  const handleSignUp = () => {
    setIsSignUp(false);
  };

  return (
    <div className="mb-10 w-[34rem]">
      <Title align="text-center" size="text-[30px]" />

      <div className="mt-10 px-10 space-y-10">
        <h1 className="font-semibold text-2xl">Sign Up</h1>

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

        <button
          className="bg-[#2A9EF4] py-[10px]  w-full rounded-md font-medium "
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
