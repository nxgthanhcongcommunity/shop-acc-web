import { useState } from "react";
import { CarretDownIcon } from "../../../assets/icons";
import { IMenuItemProps } from "../../../types/menu-item";
import HiddenContainer from "../../hidden-container";

const MenuItem = (props: IMenuItemProps) => {

  const {title, subTitle, subMenuItems, caret = true, column = 2} = props;
  const columnClass = (() => {
    switch(column) {
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-2";
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
    <li className="group relative flex flex-col cursor-pointer"  onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <div className="flex items-center gap-x-1">
        <h4 className="text-sm font-medium uppercase">{title}</h4>
        {
          caret && (
            <span>
              <CarretDownIcon width={10} height={10} />
            </span>
          )
        }
      </div>
      <span className="text-[10px] leading-[10px] text-white/50">{subTitle}</span>
      <HiddenContainer isShow={isHovered}>
        <ul className={`grid ${columnClass} w-max py-4`} 
          >
            {
              subMenuItems.map(({title, href}) => (
                <li className="px-8 py-2">
                  <span className="relative after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-slate-400 after:duration-100 hover:after:w-full">
                    {title}
                  </span>
                </li>
              ))
            }
          </ul>
      </HiddenContainer>
    </li>
  );
};
export default MenuItem;
