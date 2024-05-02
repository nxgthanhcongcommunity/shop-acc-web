import { useState } from "react";
import { IMenuItemProps } from "../../types";

const MenuItemContent = (props: any) => {
  const { isShow, subMenuItems, side, ...restProps } = props;

  return (
    <div
      className={`hidden__content ${side == "left" ? "hidden__content--left" : "hidden__content--right"} ${isShow && "hidden__content--show"}`}
    >
      <ul className="grid py-2">
        {subMenuItems &&
          subMenuItems.map(({ title, href }: any, index: number) => (
            <li className="flex h-12 w-[225px] items-center px-8" key={index}>
              <span className="content__title">{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

const MenuItem = (props: IMenuItemProps) => {
  const { title, side, subTitle, subMenuItems } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return (
    <div
      className="group relative flex cursor-pointer flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h4 className="text-sm font-semibold uppercase">{title}</h4>
      {/* <span className="text-xs leading-[10px] text-white/70">
                  {subTitle}
              </span> */}
      <MenuItemContent
        isShow={isHovered}
        subMenuItems={subMenuItems}
        side={side}
      />
    </div>
  );
};

export default MenuItem;
