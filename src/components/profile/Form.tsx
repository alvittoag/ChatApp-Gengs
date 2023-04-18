//  ** Import React
import { useState } from "react";

// ** Import Models
import { IUser } from "../../models/User";

// ** Import Other
import InputUser from "../../globals/InputUser";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { storage } from "../../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useMutation } from "@apollo/client";
import { putUser } from "../../services/api/PutUser";
import Swal from "sweetalert2";

const Form = () => {
  const userObj: any = localStorage.getItem("user");

  const user: IUser = JSON.parse(userObj);

  // ** Local state
  const [input, setInput] = useState({
    username: user.username,
    password: user.password,
    image: user.image,
  });
  const [image, setImage] = useState<any>(null);
  const [error, setError] = useState("");
  const [noUpdate, setNoUpdate] = useState(true);

  const [updateUser, { loading }] = useMutation(putUser);

  const regex = /^[A-Za-z 0-9]*$/;

  const isErrorInput = error.length >= 1;

  const isEmptyInput =
    input.username.length === 0 || input.password.length === 0;

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

    setNoUpdate(false);
  };

  const handleChangeImage = (e: any) => {
    const image = e.target.files[0];

    if (!image.name.match(/\.(jpg|jpeg|png|gif|PNG)$/)) {
      setError("Format Gambar Tidak Sesuai");
    } else {
      setError("");

      setImage(image);

      setNoUpdate(false);
    }
  };

  const handleUpdate = () => {
    const storageRef = ref(storage, `/files/${image?.name}`);

    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },

      (error) => {
        console.log(error);
      },

      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);

        const payload = {
          id: user.id,
          username: input.username,
          password: input.password,
          image: image ? url : input.image,
        };

        updateUser({
          variables: {
            id: user.id,
            update: payload,
          },
        }).then(() => {
          Swal.fire("Berhasil", "Perubahan telah tersimpan", "success");

          localStorage.removeItem("user");

          localStorage.setItem("user", JSON.stringify(payload));
        });
      }
    );
  };

  return (
    <div className="py-16 flex gap-16 items-center mb-10 overflow-hidden">
      <img src={user.image} alt={user.username} className="w-72 rounded-xl" />

      <div className="flex-1 space-y-10">
        <InputUser
          label="username"
          type="text"
          value={input.username}
          onChange={handleChangeInput}
          icon={
            <UserIcon className="h-4 w-5 absolute top-[13.3px] left-3 text-gray-500" />
          }
        />

        <InputUser
          label="password"
          type="password"
          value={input.password}
          onChange={handleChangeInput}
          icon={
            <LockClosedIcon className="h-4 w-5 absolute top-[13.3px] left-3 text-gray-500" />
          }
        />

        <div className="flex flex-col gap-1">
          <label htmlFor="name">Profile Picture</label>

          <input onChange={handleChangeImage} type="file" name="image" />
        </div>

        <button
          disabled={noUpdate || isErrorInput || loading || isEmptyInput}
          onClick={handleUpdate}
          className="px-3 py-2 w-full bg-[#2E9DF1] rounded-md font-medium disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed"
        >
          {isErrorInput ? error : "Simpan Perubahan"}
        </button>
      </div>
    </div>
  );
};

export default Form;
