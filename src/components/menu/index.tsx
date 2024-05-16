import { Link } from "react-router-dom";
import { menuItems } from "../../constants";
import MenuItem from "../menu-item";
import NeonText from "../neon-text";

const Menu = () => {
  return (
    <ul className="hidden gap-x-12 lg:flex items-baseline">
      {menuItems.map((item, index) => (
        <li key={index}>
          <MenuItem  {...item} />
        </li>
      ))}
      <li>
        <Link to="/">
          <NeonText text="Nạp thẻ"
            className="inline-block text-center text-2xl font-extrabold"
          />
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
