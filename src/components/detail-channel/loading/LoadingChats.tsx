const LoadingChats = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="animate-pulse flex items-start gap-3">
        <div className="w-[3rem] h-[3rem] bg-gray-500 rounded-full"></div>

        <div className="space-y-3 mt-3">
          <div className="w-40 py-1 rounded-2xl bg-gray-500"></div>

          <div className="w-64 py-6 rounded-md bg-gray-500 mt-1"></div>
        </div>
      </div>

      <div className="animate-pulse flex flex-row-reverse items-start gap-3">
        <div className="w-[3rem] h-[3rem] bg-gray-500 rounded-full"></div>

        <div className="space-y-3 mt-3">
          <div className="w-40 py-1 rounded-2xl bg-gray-500 ml-[89px]"></div>

          <div className="w-64 py-6 rounded-md bg-gray-500 mt-1"></div>
        </div>
      </div>

      <div className="animate-pulse flex items-start gap-3">
        <div className="w-[3rem] h-[3rem] bg-gray-500 rounded-full"></div>

        <div className="space-y-3 mt-3">
          <div className="w-40 py-1 rounded-2xl bg-gray-500"></div>

          <div className="w-64 py-6 rounded-md bg-gray-500 mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingChats;
