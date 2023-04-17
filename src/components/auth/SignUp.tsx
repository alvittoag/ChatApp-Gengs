// ** Import React
import { useState } from "react";

// ** Import Global
import InputUser from "../../globals/InputUser";
import Title from "../../globals/Title";

// ** Import Other
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { useMutation } from "@apollo/client";
import { postUser } from "../../services/api/PostUser";
import Swal from "sweetalert2";

type Props = {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUp = ({ setIsSignUp }: Props) => {
  // ** Local State
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<{ username?: string; password?: string }>({
    username: "",
    password: "",
  });

  const [signUp, { loading }] = useMutation(postUser);

  const regex = /^[A-Za-z 0-9]*$/;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "username") {
      if (regex.test(value)) {
        setError({ username: "" });
      } else {
        setError({ username: "Simbol tidak diperbolehkan" });
      }
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const isErrorUsername = error.username!.length >= 1;

  const isEmptyInput =
    input.username.length === 0 || input.password.length === 0;

  const handleSignUp = () => {
    const payload = {
      username: input.username,
      password: input.password,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
    };

    signUp({
      variables: {
        object: payload,
      },
    }).then(() => {
      setIsSignUp(false);
      Swal.fire("Berhasil", "Sign Up Berhasil", "success");
    });
  };

  return (
    <div className="mb-10 w-[34rem]">
      <Title align="text-center" size="text-[30px]" />

      <div className="mt-10 px-10 space-y-10">
        <h1 className="font-semibold text-2xl">Sign Up</h1>

        <InputUser
          label="username"
          error={error.username}
          value={input.username}
          type="text"
          placeholder="alvittoag1945"
          onChange={handleChangeInput}
          icon={
            <UserIcon className="h-4 w-5 absolute top-[13.3px] left-3 text-gray-500" />
          }
        />

        <InputUser
          label="password"
          value={input.password}
          type="password"
          placeholder="xxxxxxxxxxxx"
          onChange={handleChangeInput}
          icon={
            <LockClosedIcon className="h-4 w-5 absolute top-[13.3px] left-3 text-gray-500" />
          }
        />

        <button
          className="bg-[#2A9EF4] py-[10px] w-full rounded-md font-medium disabled:bg-gray-400 disabled:text-gray-700"
          onClick={handleSignUp}
          disabled={loading || isErrorUsername || isEmptyInput}
        >
          {error.username ? error.username : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default SignUp;
