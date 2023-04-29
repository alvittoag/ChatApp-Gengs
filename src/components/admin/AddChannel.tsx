// ** Import React
import React, { useState } from "react";

// ** Import Components
import Modal from "./Modal";

// ** Import Service
import { postChannel } from "../../services/query/PostChannel";

// ** Import Models
import { IPayloadAdmin } from "../../models/payload-admin";

// ** Import Other
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";

const AddChannel = ({ sidebar }: { sidebar: boolean }) => {
  // ** Local State
  const [input, setInput] = useState<{ name: string; description: string }>({
    name: "",
    description: "",
  });
  const [modal, setModal] = useState<boolean>(false);

  const [addChannel, { loading }] = useMutation(postChannel);

  const handleAddChannel = (payload: IPayloadAdmin) => {
    addChannel({
      variables: {
        addChannel: payload,
      },
    })
      .then(() => {
        Swal.fire("Berhasil", "Channel Baru telah ditambahkan", "success");

        setModal(false);

        setInput({ name: "", description: "" });
      })
      .catch(() =>
        Swal.fire("Gagal", "Terjadi Kesalahan Pada Server", "error")
      );
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
        <Modal
          title="Tambah Channel"
          buttonTitle="Tambah"
          addOrEditChannel={handleAddChannel}
          input={input}
          setInput={setInput}
          setModal={setModal}
          loading={loading}
        />
      )}
    </React.Fragment>
  );
};

export default AddChannel;
