import { useState } from "react";
import { MagnifyingGlassIcon, XmarkIcon } from "../../assets/icons";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTxt, setSearchTxt] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="flex h-[24px] w-[200px] items-center">
      <div className="relative flex h-full w-full -skew-x-6 items-center bg-slate-700">
        <input
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type="text"
          className="block h-full w-full  border-0 bg-transparent px-2 outline-0 duration-200 focus:bg-white focus:text-black"
        />
        <XmarkIcon
          width={12}
          height={12}
          fill={isFocused ? "#d92b4c" : "currentColor"}
          className={`absolute right-2 z-20 ${searchTxt.length > 0 ? "visible" : "invisible"}`}
          onClick={() => {
            setSearchTxt("");
          }}
        />
      </div>
      <div
        className={`inline-flex h-full w-12 -skew-x-6 cursor-pointer items-center justify-center  text-xs duration-300 ${isFocused || searchTxt.length > 0 ? "border-2  border-[#d92b4c] bg-[#d92b4c]" : ""}`}
      >
        <MagnifyingGlassIcon
          className="absolute right-2"
          width={14}
          height={14}
        />
      </div>
    </div>
  );
};

export default SearchBar;
