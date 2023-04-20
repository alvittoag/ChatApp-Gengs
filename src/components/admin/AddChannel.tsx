// ** Import React
import React, { useState } from "react";

// ** Import Service
import { postChannel } from "../../services/api/PostChannel";

// ** Import Other
import { useMutation } from "@apollo/client";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Swal from "sweetalert2";
import { storage } from "../../config/firebaseConfig";
import FormAdmin from "../../globals/FormAdmin";

const AddChannel = ({ sidebar }: { sidebar: boolean }) => {
  // ** Local State
  const [input, setInput] = useState({
    name: "",
    description: "",
  });
  const [image, setImage] = useState<any>(null);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);

  const [addChannel, { loading }] = useMutation(postChannel);

  const regex = /^[A-Za-z 0-9]*$/;

  const isErrorInput = error.length >= 1;

  const isEmptyInput =
    input.name.length === 0 || input.description.length === 0 || !image;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "name") {
      if (regex.test(value)) {
        setError("");
      } else {
        setError("Simbol tidak diperbolehkan");
      }
    }

    if (name === "description") {
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

  const handleChangeImage = (e: any) => {
    const image = e.target.files[0];

    if (!image.name.match(/\.(jpg|jpeg|png|gif|PNG)$/)) {
      setError("Format Gambar Tidak Sesuai");
    } else {
      setError("");

      setImage(image);
    }
  };

  const handleAddChannel = () => {
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
          name: input.name,
          description: input.description,
          image: url,
        };

        addChannel({
          variables: {
            addChannel: payload,
          },
        }).then(() => {
          Swal.fire("Berhasil", "Channel Baru telah ditambahkan", "success");
          setModal(false);
          setInput({ name: "", description: "" });
        });
      }
    );
  };

  const handleCancel = () => {
    setInput({ name: "", description: "" });
    setModal(false);
  };

  return (
    <React.Fragment>
      <div className="px-9 w-full absolute bottom-[178px]">
        <label
          htmlFor="my-modal"
          onClick={() => setModal(true)}
          className={`bg-[#2E9DF1] ${
            !sidebar ? "px-3" : "px-6"
          } py-3 flex justify-center text-center rounded-md font-medium cursor-pointer`}
        >
          <h1>{!sidebar ? "+ Tambah Channel" : "+"}</h1>
        </label>
      </div>

      {modal && (
        <div>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal bg-gray-800/70">
            <div className="modal-box">
              <h3 className="font-medium text-slate-700 text-xl text-center">
                Tambah Channel
              </h3>

              <FormAdmin
                valueInput={input.name}
                valueTextarea={input.description}
                handleChangeInput={handleChangeInput}
                handleChangeImage={handleChangeImage}
              />

              {<p className="text-red-600 font-semibold">{error}</p>}

              <div className="modal-action">
                <label
                  htmlFor="my-modal"
                  onClick={handleCancel}
                  className="py-2 px-3 rounded-md text-lg bg-red-600 text-white cursor-pointer"
                >
                  Batal
                </label>

                <button
                  disabled={loading || isErrorInput || isEmptyInput}
                  onClick={handleAddChannel}
                  className="py-2 px-3 rounded-md text-lg bg-[#2E9DF1] text-white cursor-pointer disabled:bg-gray-400"
                >
                  Tambah
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default AddChannel;
