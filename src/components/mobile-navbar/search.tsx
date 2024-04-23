import { MagnifyingGlassIcon } from "../../assets/icons";

const Search = () => {
    return (
<div
                className={`inline-flex h-full w-12 -skew-x-6 cursor-pointer items-center justify-center  text-xs duration-300`}
              >
                <MagnifyingGlassIcon
                  className="absolute right-2"
                  width={14}
                  height={14}
                />
              </div>
    );
}

export default Search;