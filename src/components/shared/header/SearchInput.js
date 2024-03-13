import { HiOutlineSearch } from "react-icons/hi";

const SearchInput = () => {
  return (
    <div className="relative">
      <HiOutlineSearch
        fontSize={20}
        className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3 mx-1"
      />
      <input
        type="text"
        placeholder="Search..."
        className="text-sm focus:outline-none active:outline-none h-10 md:w-[30rem] w-[13.5rem] border mx-2 border-gray-300 rounded-sm pr-4 pl-11 px-2"
      />
    </div>
  );
};

export default SearchInput;
