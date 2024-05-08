import { UserIcon } from "../../assets/icons";
import Cart from "../cart";
import MenuItem from "../menu-item";
import SearchBar from "../search-bar";

const UserMenu = () => {
  return (
    <ul className="hidden items-center gap-x-4 lg:flex lg:gap-x-6">
      <li>
        <SearchBar.PC />
      </li>
      <li>
        <Cart.PC />
      </li>
      <li>
        <MenuItem
          title={<UserIcon className="h-4 w-4" />}
          subMenuItems={[
            { title: "Đăng ký/Đăng nhập", href: "/signup" },
          ]}
          side="left"
        />
      </li>
    </ul>
  );
};

export default UserMenu;
