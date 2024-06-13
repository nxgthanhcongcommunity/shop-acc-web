import { Link } from "react-router-dom";
import { selectMaster } from "../../stores/features/masterSlice";
import { useSelector } from "../../stores/hooks";
import { IMenuItemProps } from "../../types";
import NeonText from "../neon-text";
import MenuItem from "./menuItem";

const Menu = () => {

  const masterData = useSelector(selectMaster);

  if (masterData == null) { return <p>Loading...</p> }

  const { menuItems, highLightItem }: { menuItems: IMenuItemProps[], highLightItem: any } = masterData.entity;
  if (menuItems == null || highLightItem == null) return <>...</>

  return (
    <ul className="hidden items-baseline gap-x-12 lg:flex">
      {menuItems.map((item, index) => (
        <li key={index}>
          <MenuItem {...item} />
        </li>
      ))}
      <li>
        <Link to={highLightItem.href}>
          <NeonText
            text={highLightItem.title}
            className="inline-block text-center text-xl font-extrabold"
          />
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
