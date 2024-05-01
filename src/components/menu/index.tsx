import { menuItems } from "../../constants";
import MenuItem from "../menu-item";

const Menu = () => {
  return (
    <ul className="hidden gap-x-12 lg:flex">
      {menuItems.map((item, index) => (
        <li>
          <MenuItem key={index} {...item} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
