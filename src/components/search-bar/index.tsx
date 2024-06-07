import { useState } from "react";
import { MagnifyingGlassIcon, XmarkIcon } from "../../assets/icons";
import useOutsideClick from "../../hooks/useOutsideClick";

const SearchBar = {
  PC: () => {
    const [isShow, dropDownRef, handleClick, handleMouseLeave] =
      useOutsideClick<HTMLDivElement>();

    return (
      <div className="group relative" ref={dropDownRef}>
        <MagnifyingGlassIcon
          className="cursor-pointer"
          width={20}
          height={20}
          onClick={handleClick}
        />
        <div
          className={`${isShow ? "visible top-[calc(100%+10px)] opacity-100" : "invisible top-full opacity-0"} absolute right-[-10px] z-searchBar w-[60vw] bg-hidden p-6 duration-500 lg:p-20`}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative w-full">
            <input
              className="text-md block w-full bg-transparent pb-2 font-semibold text-slate-100 outline-none lg:pb-4 lg:text-4xl"
              type="text"
              placeholder="gõ nội dung cần tìm và nhấn enter"
            />
            <span
              className={`absolute bottom-0 left-0 block h-[1px] ${isShow ? "w-full" : "w-0"} bg-slate-100 delay-700 duration-700`}
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
          className={`${isVisible ? "block" : "hidden"} z-searchBar ml-2 mt-2 w-full bg-hidden p-6 duration-300`}
        >
          <div className="relative flex w-full items-center">
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
};

export default SearchBar;
