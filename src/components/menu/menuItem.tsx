import { useState } from "react";
import { IMenuItemProps } from "../../types";
import MenuItemContent from "./menuItemContent";

const MenuItem = (props: IMenuItemProps) => {
  const { title, side, subMenuItems } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="group relative flex cursor-pointer flex-col after:absolute after:right-0 after:top-full after:h-8 after:w-[100%] after:bg-transparent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h4 className="text-sm font-semibold uppercase">{title}</h4>
      <MenuItemContent
        isShow={isHovered}
        subMenuItems={subMenuItems}
        side={side}
      />
    </div>
  );
};

export default MenuItem;
