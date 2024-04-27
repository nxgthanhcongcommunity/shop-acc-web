import Cart from "../cart";
import SearchBar from "../search-bar";

const UserMenu = () => {
  return (
    <ul className="flex items-center gap-x-4 lg:gap-x-6">
      <li>
        <SearchBar />
      </li>
      <li>
        <Cart />
      </li>
    </ul>
  );
};

export default UserMenu;
