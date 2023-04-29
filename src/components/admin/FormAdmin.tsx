type Props = {
  valueInput: string;
  valueTextarea: string;
  handleChangeInput: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleChangeImage: (e: any) => void;
};

const FormAdmin = (props: Props) => {
  const { valueInput, valueTextarea, handleChangeInput, handleChangeImage } =
    props;

  return (
    <div className="flex flex-col py-10 space-y-5">
      <input
        type="text"
        name="name"
        value={valueInput}
        onChange={handleChangeInput}
        placeholder="Nama Channel..."
        className="ring-1 ring-gray-300 rounded-md py-2 px-3 focus:outline-none text-slate-700"
      />

      <textarea
        name="description"
        placeholder="Deskripsi Channel..."
        value={valueTextarea}
        onChange={handleChangeInput}
        cols={20}
        rows={5}
        className="ring-1 ring-gray-300 rounded-md px-3 focus:outline-none text-slate-700"
      ></textarea>

      <div className="text-slate-700 space-y-2 flex flex-col">
        <label htmlFor="image">Gambar Channel</label>

        <input type="file" name="image" onChange={handleChangeImage} />
      </div>
    </div>
  );
};

export default FormAdmin;
