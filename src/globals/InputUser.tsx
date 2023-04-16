type Props = {
  label: string;
  type: string;
  placeholder: string;
  icon: any;
};

const InputUser = (props: Props) => {
  const { label, type, placeholder, icon } = props;

  return (
    <div className="space-y-2">
      <label htmlFor={label} className="font-medium">
        {label}
      </label>
      <div className="relative text-gray-300 ">
        <input
          type={type}
          placeholder={placeholder}
          name={label}
          className="ring-1 w-full py-3 pl-10 rounded-md ring-gray-600 text-sm font-semibold focus:outline-none text-gray-600"
        />
        {icon}
      </div>
    </div>
  );
};

export default InputUser;
