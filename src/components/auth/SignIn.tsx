// ** Import React
import { useState } from "react";

// ** Import Components
import FormAuth from "./FormAuth";
import TitlePage from "../../globals/TitlePage";

// ** Import Models
import { IUser } from "../../models/user";

// ** Import Other
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLazyQuery } from "@apollo/client";
import { getUserByUsernameAndPassword } from "../../services/query/GetUser";

type Props = {
  handleSignUp: () => void;
};

const SignIn = ({ handleSignUp }: Props) => {
  // ** Local state
  const [input, setInput] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  const [validateUser, { loading }] = useLazyQuery(
    getUserByUsernameAndPassword
  );

  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    validateUser({
      variables: {
        username: input.username,
        password: input.password,
      },
    })
      .then(({ data: { users } }) => {
        const user: IUser = users[0];

        if (users.length === 0) {
          Swal.fire("Sign In Gagal", "Email atau Password Salah", "error");
        } else {
          localStorage.setItem("token", user.id.toString());

          localStorage.setItem("user", JSON.stringify(user));

          Swal.fire("Berhasil", "Sign In Berhasil", "success");

          navigate("/home");
        }
      })
      .catch(() =>
        Swal.fire("Sign In Gagal", "Terjadi Kesalahan Pada Server", "error")
      );
  };

  return (
    <div className="w-[34rem]">
      <TitlePage title="Sign In" />

      <FormAuth
        input={input}
        handleSignIn={handleSignIn}
        handleSignUp={handleSignUp}
        loading={loading}
        setInput={setInput}
        title="Sign In"
      />
    </div>
  );
};

export default SignIn;
