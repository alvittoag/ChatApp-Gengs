// ** Import React
import { useEffect, useState } from "react";

// ** Import Components
import Modal from "../admin/Modal";

// ** Import Recoil
import { useRecoilState, useSetRecoilState } from "recoil";
import { infoChannel } from "../../recoil/info-channel";
import { toggleInfoChannel } from "../../recoil/toggle";

// ** Import Service
import { deleteChannel } from "../../services/query/DeleteChannel";
import { putChannel } from "../../services/query/PutChannel";

// ** Import Models
import { IPayloadAdmin } from "../../models/payload-admin";

// ** Import Other
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userLocalStorage } from "../../helpers/user-localstorage";
import LazyLoad from "react-lazy-load";
import LoadingButton from "../../globals/LoadingButton";

const InfoChannel = ({ sideChannel }: { sideChannel: boolean }) => {
  // ** Recoil State
  const [info, setInfo] = useRecoilState(infoChannel);
  const setToggleInfoChannel = useSetRecoilState(toggleInfoChannel);

  // ** Local State
  const [input, setInput] = useState<{ name: string; description: string }>({
    name: "",
    description: "",
  });
  const [modal, setModal] = useState<boolean>(false);
  const [noUpdate, setNoUpdate] = useState<boolean>(true);

  useEffect(() => {
    setInput({ name: info.name, description: info.description });
  }, [info]);

  const [deleteChannelById, { loading: loadingDelete }] =
    useMutation(deleteChannel);

  const [updateChannelById, { loading: loadingUpdate }] =
    useMutation(putChannel);

  const handleEditChannel = (payload: IPayloadAdmin) => {
    updateChannelById({
      variables: {
        channel_id: info.id,
        setUpdateChannel: payload,
      },
    })
      .then(() => {
        Swal.fire("Berhasil", "Channel Telah Terupdate", "success");
        setNoUpdate(true);

        setInfo({ ...payload, id: info.id });

        setModal(false);
      })
      .catch(() =>
        Swal.fire("Gagal", "Terjadi Kesalahan Pada Server", "error")
      );
  };

  const { username } = userLocalStorage();

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
        })
          .then(() => {
            setToggleInfoChannel(false);

            Swal.fire("Berhasil", "Channel Telah Terhapus", "success");
          })
          .catch(() =>
            Swal.fire("Gagal", "Terjadi Kesalahan Pada Server", "error")
          );
        navigate("/home");
      }
    });
  };

  return (
    <div className="px-10 py-5 space-y-5 w-full text-white/90 font-medium h-[100vh] relative">
      <LazyLoad threshold={0.95}>
        <img src={info.image} alt={info.name} className="rounded-md" />
      </LazyLoad>

      <h1 className="text-xl">{info.name}</h1>

      <p className="text-sm tracking-wide">{info.description}</p>
      {username === "admin" && (
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
            {loadingDelete ? <LoadingButton /> : "Delete"}
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
        <Modal
          addOrEditChannel={handleEditChannel}
          buttonTitle="Simpan Perubahan"
          input={input}
          loading={loadingUpdate}
          setInput={setInput}
          setModal={setModal}
          title={`Edit Channel ${info.name}`}
          noUpdate={noUpdate}
          setNoUpdate={setNoUpdate}
          isUpdateChannel={true}
        />
      )}
    </div>
  );
};

export default InfoChannel;
