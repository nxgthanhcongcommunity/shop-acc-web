import useOutsideClick from "../../hooks/useOutsideClick";
import { IMenuItemProps } from "../../types";
import MenuItemContent from "./menuItemContent";

const MenuItem = (props: IMenuItemProps) => {
  const { title, side, subMenuItems } = props;

  const [isShow, dropDownRef, handleClick, handleMouseLeave] =
    useOutsideClick<HTMLDivElement>();

  return (
    <div className="relative flex cursor-pointer" ref={dropDownRef}>
      <h4 className="text-sm font-semibold uppercase" onClick={handleClick}>
        {title}
      </h4>
      <MenuItemContent
        isShow={isShow}
        subMenuItems={subMenuItems}
        side={side}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default MenuItem;
