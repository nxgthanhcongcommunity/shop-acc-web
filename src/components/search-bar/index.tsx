import { useState } from "react";
import { MagnifyingGlassIcon, XmarkIcon } from "../../assets/icons";

const SearchBar = () => {
  const [isShowSearchBox, setIsShowSearchBox] = useState(false);

  return (
    <div>
      <MagnifyingGlassIcon
        className="cursor-pointer"
        width={20}
        height={20}
        onClick={() => setIsShowSearchBox(true)}
      />
      <div
        className={`z-searchBar fixed bottom-0 left-0 h-[50vh] w-full bg-[rgba(18,8,45,1)] p-6 duration-500 lg:p-20 ${isShowSearchBox ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex w-full flex-col items-end justify-stretch">
          <XmarkIcon
            className="h-8 w-8 cursor-pointer"
            onClick={() => setIsShowSearchBox(false)}
          />
          <div className="relative w-full">
            <input
              className="text-md mt-20 block w-full bg-transparent pb-2 font-semibold text-slate-100 outline-none lg:pb-4 lg:text-4xl"
              type="text"
              placeholder="gõ nội dung cần tìm và nhấn enter"
            />
            <span
              className={`absolute bottom-0 left-0 block h-[1px] ${isShowSearchBox ? "w-full" : "w-0"} bg-slate-100 delay-700 duration-700`}
            ></span>
            <MagnifyingGlassIcon className="lg: absolute bottom-[20px] right-0 h-4 cursor-pointer lg:h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
