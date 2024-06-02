import { Link } from "react-router-dom";
import { menuItems } from "../../constants";
import NeonText from "../neon-text";
import MenuItem from "./menuItem";

const Menu = () => {
  return (
    <ul className="hidden items-baseline gap-x-12 lg:flex">
      {menuItems.map((item, index) => (
        <li key={index}>
          <MenuItem {...item} />
        </li>
      ))}
      <li>
        <Link to="/">
          <NeonText
            text="Nạp thẻ"
            className="inline-block text-center text-2xl font-extrabold"
          />
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
