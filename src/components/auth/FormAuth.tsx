// ** Import React
import React, { useState } from "react";

// ** Import Components
import Title from "../../globals/Title";
import InputUser from "../../globals/InputUser";

// ** Import Other
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import LoadingButton from "../../globals/LoadingButton";

type Props = {
  input: { username: string; password: string };
  setInput: React.Dispatch<
    React.SetStateAction<{
      username: string;
      password: string;
    }>
  >;
  title: string;
  loading: boolean;
  handleSignIn?: (e: React.FormEvent) => void;
  handleSignUp: () => void;
  isSignUp?: boolean;
};

const FormAuth = (props: Props) => {
  const {
    input,
    setInput,
    title,
    handleSignIn,
    loading,
    handleSignUp,
    isSignUp,
  } = props;

  // ** Local State
  const [error, setError] = useState("");

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

  return (
    <React.Fragment>
      <Title align="text-center" size="text-[30px]" />

      <div className="mt-10 px-10 space-y-10">
        <h1 className="font-semibold text-2xl">{title}</h1>

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
            onClick={handleSignIn ?? handleSignUp}
            className={`bg-[#2A9EF4] py-[10px] w-full rounded-md font-medium disabled:bg-gray-400 disabled:text-slate-700 disabled:cursor-not-allowed`}
          >
            {isErrorInput ? error : loading ? <LoadingButton /> : title}
          </button>

          {!isSignUp && (
            <p className="text-gray-400 text-sm">
              Don't have an account ?{" "}
              <span
                className="text-sm text-[#2A9EF4] cursor-pointer"
                onClick={handleSignUp}
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormAuth;
