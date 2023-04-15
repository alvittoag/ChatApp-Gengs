// ** Import Recoil
import { useRecoilState } from "recoil";
import { searchChannel } from "../../recoil/search-channel";

// ** Import Other
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

const InputSearch = () => {
  // ** Recoil State
  const [search, setSearch] = useRecoilState(searchChannel);

  const handleDeleteSearch = () => {
    setSearch("");
  };

  return (
    <div className="px-8 mt-6 mb-7 ">
      <div className="relative">
        <input
          type="text"
          value={search}
          placeholder="Cari Channel..."
          className="w-full bg-[#212329] py-[8px] px-3 rounded-md text-gray-300 ring-1  ring-gray-600 shadow-xl placeholder:text-gray-500 font-medium focus:outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />

        {search.length >= 1 ? (
          <XMarkIcon
            onClick={handleDeleteSearch}
            className="absolute right-4 top-[9px] w-5 h-5 text-gray-400 cursor-pointer"
          />
        ) : (
          <MagnifyingGlassIcon className="absolute right-4 top-[9px] w-5 h-5 text-gray-400 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default InputSearch;
