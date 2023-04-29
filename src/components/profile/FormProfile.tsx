//  ** Import React
import { useState } from "react";

// ** Import Other
import InputUser from "../../globals/InputUser";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { storage } from "../../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useMutation } from "@apollo/client";
import { putUser } from "../../services/query/PutUser";
import Swal from "sweetalert2";
import { userLocalStorage } from "../../helpers/user-localstorage";
import { getUserByUsernameAndPassword } from "../../services/query/GetUser";
import LazyLoad from "react-lazy-load";
import LoadingButton from "../../globals/LoadingButton";

const FormProfile = () => {
  const {
    id: userId,
    username,
    password,
    image: imageUser,
  } = userLocalStorage();

  // ** Local state
  const [input, setInput] = useState<{
    username: string;
    password: string;
    imageUser: string;
  }>({
    username,
    password,
    imageUser,
  });
  const [image, setImage] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [noUpdate, setNoUpdate] = useState<boolean>(true);

  const [updateUser, { loading }] = useMutation(putUser, {
    refetchQueries: [getUserByUsernameAndPassword],
  });

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
          id: userId,
          username: input.username,
          password: input.password,
          image: image ? url : input.imageUser,
        };

        updateUser({
          variables: {
            id: userId,
            update: payload,
          },
        })
          .then(() => {
            Swal.fire("Berhasil", "Perubahan telah tersimpan", "success");

            localStorage.removeItem("user");

            localStorage.setItem("user", JSON.stringify(payload));

            setNoUpdate(true);
          })
          .catch(() =>
            Swal.fire("Gagal", "Terjadi Kesalahan Pada Server", "error")
          );
      }
    );
  };

  return (
    <div className="py-16 flex gap-16 items-center mb-10 overflow-hidden">
      <LazyLoad threshold={0.95}>
        <img src={imageUser} alt={username} className="w-72 rounded-xl" />
      </LazyLoad>

      <div className="flex-1 space-y-10">
        <InputUser
          label="username"
          error={error}
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
          {isErrorInput ? (
            error
          ) : loading ? (
            <LoadingButton />
          ) : (
            "Simpan Perubahan"
          )}
        </button>
      </div>
    </div>
  );
};

export default FormProfile;
