import { UserIcon } from "../../assets/icons";
import Cart from "../cart";
import SearchBar from "../search-bar";

const UserMenu = () => {
  return (
    <ul className="hidden items-center gap-x-4 lg:flex lg:gap-x-6">
      <li>
        <SearchBar />
      </li>
      <li>
        <Cart />
      </li>
      <li>
        <UserIcon className="h-4 w-4" />
      </li>
    </ul>
  );
};

export default UserMenu;
