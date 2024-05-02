import { useState } from "react";
import { MagnifyingGlassIcon, XmarkIcon } from "../../assets/icons";

const SearchBar = {
  PC: () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };


    return (
      <div
        className="group relative cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MagnifyingGlassIcon
          className="cursor-pointer"
          width={20}
          height={20}
        />
        <div
          className={`${isVisible ? "top-[calc(100%+10px)] opacity-100 visible" : "top-full opacity-0 invisible"} z-searchBar absolute right-[-10px] w-[60vw] bg-hidden p-6 duration-500 lg:p-20`}
        >
          <div className="relative w-full">
            <input
              className="text-md block w-full bg-transparent pb-2 font-semibold text-slate-100 outline-none lg:pb-4 lg:text-4xl"
              type="text"
              placeholder="gõ nội dung cần tìm và nhấn enter"
            />
            <span
              className={`absolute bottom-0 left-0 block h-[1px] ${isVisible ? "w-full" : "w-0"} bg-slate-100 delay-700 duration-700`}
            ></span>
            <MagnifyingGlassIcon className="lg: absolute bottom-[20px] right-0 h-4 cursor-pointer lg:h-12" />
          </div>
        </div>
      </div>
    );
  },
  Mobile: () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };


    return (
      <div
        className="group cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MagnifyingGlassIcon
          className="cursor-pointer"
          width={20}
          height={20}
        />
        <div
          className={`${isVisible ? "block" : "hidden"} ml-2 mt-2 z-searchBar w-full bg-hidden p-6 duration-300`}
        >
          <div className="relative w-full flex items-center">
            <input
              className="text-md block w-full bg-transparent font-semibold text-slate-100 outline-none lg:pb-4 lg:text-4xl"
              type="text"
              placeholder="gõ nội dung cần tìm và nhấn enter"
            />
            <span
              className={`absolute bottom-0 left-0 block h-[1px] ${isVisible ? "w-full" : "w-0"} bg-slate-100 delay-700 duration-700`}
            ></span>
            <div className="p-1">
              <MagnifyingGlassIcon className=" h-4 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    );
  },
}

export default SearchBar;
