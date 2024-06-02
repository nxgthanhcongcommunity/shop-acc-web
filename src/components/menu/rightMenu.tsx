import Cart from "../cart";
import SearchBar from "../search-bar";
import UserMenuItem from "./userMenuItem";

const RightMenu = () => {
  return (
    <ul className="hidden items-center gap-x-4 lg:flex lg:gap-x-6">
      <li>
        <SearchBar.PC />
      </li>
      <li>
        <Cart.PC />
      </li>
      <li>
        <UserMenuItem />
      </li>
    </ul>
  );
};

export default RightMenu;
