// ** Import React
import { useState } from "react";

// ** Import Components
import FormAuth from "./FormAuth";
import TitlePage from "../../globals/TitlePage";

// ** Import Other
import { useMutation } from "@apollo/client";
import { postUser } from "../../services/query/PostUser";
import Swal from "sweetalert2";

type Props = {
  setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUp = ({ setIsSignUp }: Props) => {
  // ** Local State
  const [input, setInput] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  const [signUp, { loading, error }] = useMutation(postUser);

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
    })
      .then(() => {
        setIsSignUp(false);
        Swal.fire("Berhasil", "Sign Up Berhasil", "success");
      })
      .catch(() => {
        Swal.fire("Sign Up Gagal", "Terjadi Kesalahan Pada Server", "error");
      });
  };

  return (
    <div className="mb-10 w-[34rem]">
      <TitlePage title="Sign Up" />

      <FormAuth
        handleSignUp={handleSignUp}
        input={input}
        loading={loading}
        setInput={setInput}
        title="Sign Up"
        isSignUp={true}
      />
    </div>
  );
};

export default SignUp;
