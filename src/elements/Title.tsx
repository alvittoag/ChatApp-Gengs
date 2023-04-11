// ** Import 3rd Party
import { useNavigate } from "react-router-dom";

const Title = ({ link }: { link: string }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(link);
  };

  return (
    <div className="cursor-pointer" onClick={handleNavigate}>
      <h1 className="text-[27px] font-bold">
        Gengs <span className="text-[#2A9EF4]">App</span>
      </h1>
    </div>
  );
};

export default Title;
