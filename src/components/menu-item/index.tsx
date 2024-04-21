import { useState } from "react";
import { CarretDownIcon } from "../../assets/icons";
import { IMenuItemProps } from "../../types/menu-item";
import HiddenContainer from "../hidden-container";

const MenuItem = (props: IMenuItemProps) => {
  const { title, subTitle, subMenuItems, caret = true, column = 2 } = props;
  const columnClass = (() => {
    switch (column) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
    }
  })();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="group relative flex cursor-pointer flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-x-1">
        <h4 className="text-sm font-medium uppercase">{title}</h4>
        {caret && (
          <span>
            <CarretDownIcon width={10} height={10} />
          </span>
        )}
      </div>
      <span className="text-[10px] leading-[10px] text-white/50">
        {subTitle}
      </span>
      <HiddenContainer show={isHovered}>
        <ul className={`grid ${columnClass} w-max py-2`}>
          {subMenuItems.map(({ title, href }, index) => (
            <li className="px-6 py-2" key={index}>
              <span className="relative after:absolute after:left-0 after:top-full after:h-[2px] after:w-0 after:bg-slate-400 after:duration-100 hover:after:w-full">
                {title}
              </span>
            </li>
          ))}
        </ul>
      </HiddenContainer>
    </div>
  );
};
export default MenuItem;
