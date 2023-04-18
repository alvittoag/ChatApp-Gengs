// ** Import Other
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <Link
      to="/home"
      className="flex items-center gap-2 text-white/90 font-medium"
    >
      <ArrowLeftIcon className="h-5 w-5" />
      <h1 className="text-lg">Kembali</h1>
    </Link>
  );
};

export default Back;
