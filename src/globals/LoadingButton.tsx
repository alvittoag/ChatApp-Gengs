import ReactLoading from "react-loading";

const LoadingButton = () => {
  return (
    <div className="flex justify-center items-center ">
      <ReactLoading type="bars" color="white" height={24} width={28} />
    </div>
  );
};

export default LoadingButton;
