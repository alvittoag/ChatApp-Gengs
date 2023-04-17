type Props = {
  label: string;
  type: string;
  placeholder: string;
  icon: any;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputUser = (props: Props) => {
  const { label, type, placeholder, icon, value, onChange, error } = props;

  return (
    <div className="space-y-2">
      <label htmlFor={label} className="font-medium">
        {label}
      </label>
      <div className="relative text-gray-300 ">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={label}
          className={`ring-1 w-full py-3 pl-10 rounded-md text-sm font-semibold focus:outline-none text-gray-600 ${
            error ? "ring-2 ring-red-600" : "ring-gray-600"
          } `}
        />
        {icon}
      </div>
    </div>
  );
};

export default InputUser;
