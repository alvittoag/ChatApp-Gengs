// ** Import React
import { useState } from "react";

// ** Import Components
import FormAdmin from "./FormAdmin";

// ** Import Recoil
import { useRecoilValue } from "recoil";
import { infoChannel } from "../../recoil/info-channel";

// ** Import Models
import { IPayloadAdmin } from "../../models/payload-admin";

// ** Import Other
import { storage } from "../../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import LoadingButton from "../../globals/LoadingButton";

type Props = {
  input: { name: string; description: string };
  addOrEditChannel: (payload: IPayloadAdmin) => void;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setInput: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
    }>
  >;
  setNoUpdate?: any;
  loading: boolean;
  title: string;
  buttonTitle: string;
  noUpdate?: boolean;
  isUpdateChannel?: boolean;
};

const Modal = (props: Props) => {
  const {
    input,
    addOrEditChannel,
    setModal,
    setInput,
    loading,
    title,
    buttonTitle,
    noUpdate,
    setNoUpdate,
    isUpdateChannel,
  } = props;

  // ** Recoil State
  const info = useRecoilValue(infoChannel);

  // ** Local State
  const [image, setImage] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const regex = /^[A-Za-z 0-9]*$/;

  const isErrorInput = error.length >= 1;

  const isEmptyInput = isUpdateChannel
    ? input.name.length === 0 || input.description.length === 0
    : input.name.length === 0 || input.description.length === 0 || !image;

  const handleChangeInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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

    if (isUpdateChannel) {
      setNoUpdate(false);
    }
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

  const handleChannel = () => {
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

        addOrEditChannel(payload);
      }
    );
  };

  const handleCancel = () => {
    if (!isUpdateChannel) {
      setInput({ name: "", description: "" });
    } else {
      setNoUpdate(true);
      setInput(info);
    }
    setModal(false);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal bg-slate-900/90">
        <div className="modal-box">
          <h3 className="font-medium text-slate-700 text-xl text-center">
            {title}
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
              disabled={loading || isErrorInput || isEmptyInput || noUpdate}
              onClick={handleChannel}
              className="py-2 px-3 rounded-md text-lg bg-[#2E9DF1] text-white cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? <LoadingButton /> : buttonTitle}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
