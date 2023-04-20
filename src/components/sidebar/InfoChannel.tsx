// ** Import React
import { useEffect, useState } from "react";

// ** Import Models
import { IUser } from "../../models/User";

// ** Import Recoil
import { useRecoilState, useSetRecoilState } from "recoil";
import { infoChannel } from "../../recoil/info-channel";
import { toggleInfoChannel } from "../../recoil/toggle";

// ** Import Service
import { deleteChannel } from "../../services/api/DeleteChannel";

// ** Import Other
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { storage } from "../../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import FormAdmin from "../../globals/FormAdmin";
import { putChannel } from "../../services/api/PutChannel";

const InfoChannel = ({ sideChannel }: { sideChannel: boolean }) => {
  // ** Recoil State
  const [info, setInfo] = useRecoilState(infoChannel);
  const setToggleInfoChannel = useSetRecoilState(toggleInfoChannel);

  // ** Local State
  const [input, setInput] = useState({
    name: "",
    description: "",
  });
  const [image, setImage] = useState<any>(null);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [noUpdate, setNoUpdate] = useState(true);

  useEffect(() => {
    setInput({ name: info.name, description: info.description });
  }, [info]);

  const [deleteChannelById, { loading: loadingDelete }] =
    useMutation(deleteChannel);

  const [updateChannelById, { loading: loadingUpdate }] =
    useMutation(putChannel);

  const regex = /^[A-Za-z 0-9]*$/;

  const isErrorInput = error.length >= 1;

  const isEmptyInput =
    input.name.length === 0 || input.description.length === 0;

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

  const handleEdit = () => {
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
          image: image ? url : info.image,
        };

        updateChannelById({
          variables: {
            channel_id: info.id,
            setUpdateChannel: payload,
          },
        }).then(() => {
          Swal.fire("Berhasil", "Channel Telah Terupdate", "success");
          setNoUpdate(true);

          setInfo({ ...payload, id: info.id });

          setModal(false);
        });
      }
    );
  };

  const handleCancel = () => {
    setNoUpdate(true);
    setModal(false);
  };

  const userObj: any = localStorage.getItem("user");

  const user: IUser = JSON.parse(userObj);

  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "Anda yakin ingin menghapus channel ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2E9DF1",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sangat Yakin",
      cancelButtonText: "Batalin",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteChannelById({
          variables: {
            channel_id: info.id,
          },
        }).then(() => {
          Swal.fire("Berhasil", "Channel Telah Terhapus", "success");

          navigate("/home");

          setToggleInfoChannel(false);
        });
      }
    });
  };

  return (
    <div className="px-10 py-5 space-y-5 w-full text-white/90 font-medium h-[100vh] relative">
      <img src={info.image} alt={info.name} className="rounded-md" />

      <h1 className="text-xl">{info.name}</h1>

      <p className="text-sm tracking-wide">{info.description}</p>
      {user.username === "admin" && (
        <div
          className={`absolute bottom-8 ${
            !sideChannel && "ml-32 duration-500"
          } right-0 left-0 flex justify-center gap-4`}
        >
          <button
            onClick={handleDelete}
            disabled={loadingDelete}
            className="px-3 py-2 bg-red-600 rounded-md font-medium disabled:bg-gray-400 "
          >
            Delete
          </button>

          <label
            htmlFor="my-modal"
            onClick={() => setModal(true)}
            className="px-3 py-2 bg-[#2E9DF1] rounded-md font-medium cursor-pointer"
          >
            <h1>Edit Channel</h1>
          </label>
        </div>
      )}

      {modal && (
        <div>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal bg-gray-800/70">
            <div className="modal-box">
              <h3 className="font-medium text-slate-700 text-xl text-center">
                Edit Channel "{info.name}"
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
                  disabled={
                    loadingUpdate || isErrorInput || isEmptyInput || noUpdate
                  }
                  onClick={handleEdit}
                  className="py-2 px-3 rounded-md text-lg bg-[#2E9DF1] text-white cursor-pointer disabled:bg-gray-400"
                >
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoChannel;
