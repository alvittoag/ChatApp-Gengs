// ** Import React
import { useState } from "react";

// ** Import Globals
import Title from "../../globals/Title";
import InputUser from "../../globals/InputUser";

// ** Import Models
import { IUser } from "../../models/User";

// ** Import Other
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLazyQuery } from "@apollo/client";
import { getUserByUsernameAndPassword } from "../../services/api/GetUser";

type Props = {
  handleSignUp: () => void;
};

const SignIn = ({ handleSignUp }: Props) => {
  // ** Local state
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const [validateUser, { loading, data }] = useLazyQuery(
    getUserByUsernameAndPassword
  );

  console.log(data);

  const regex = /^[A-Za-z 0-9]*$/;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "username") {
      if (regex.test(value)) {
        setError("");
      } else {
        setError("Simbol tidak diperbolehkan");
      }
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const isErrorInput = error.length >= 1;

  const isEmptyInput =
    input.username.length === 0 || input.password.length === 0;

  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    validateUser({
      variables: {
        username: input.username,
        password: input.password,
      },
    }).then(({ data: { users } }) => {
      const user: IUser = users[0];

      if (users.length === 0) {
        Swal.fire("Sign In Gagal", "Email atau Password Salah", "error");
      } else {
        localStorage.setItem("token", user.id.toString());

        localStorage.setItem("user", JSON.stringify(user));

        Swal.fire("Berhasil", "Sign In Berhasil", "success");

        navigate("/home");
      }
    });
  };

  return (
    <div className="w-[34rem]">
      <Title align="text-center" size="text-[30px]" />

      <div className="mt-10 px-10 space-y-10">
        <h1 className="font-semibold text-2xl">Sign In</h1>

        <InputUser
          label="username"
          error={error}
          type="text"
          value={input.username}
          onChange={handleChangeInput}
          placeholder="alvittoag1945"
          icon={
            <UserIcon className="h-4 w-5 absolute top-[13.3px] left-3 text-gray-500" />
          }
        />

        <InputUser
          label="password"
          type="password"
          value={input.password}
          onChange={handleChangeInput}
          placeholder="xxxxxxxxxxxx"
          icon={
            <LockClosedIcon className="h-4 w-5 absolute top-[13.3px] left-3 text-gray-500" />
          }
        />

        <div className="space-y-5">
          <button
            disabled={loading || isErrorInput || isEmptyInput}
            onClick={handleSignIn}
            className={`bg-[#2A9EF4] py-[10px] w-full rounded-md font-medium disabled:bg-gray-400 disabled:text-slate-700 disabled:cursor-not-allowed`}
          >
            {isErrorInput ? error : "Sign"}
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
