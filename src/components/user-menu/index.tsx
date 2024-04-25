import Cart from "../cart";
import SearchBar from "../search-bar";
import UserMenuItem from "../user-menu-item";

const UserMenu = () => {
    return (
        <ul className="flex items-center gap-x-6">
          <li>
            <SearchBar />
          </li>
          <li>
            <Cart />
          </li>
          {/* <UserMenuItem /> */}
        </ul>
    )
}

export default UserMenu;