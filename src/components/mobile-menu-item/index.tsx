import { CarretDownIcon } from "../../assets/icons";
import useToggleVisibility from "../../hooks/useToggleVisibility";

const MobileMenuItem = (props: any) => {
  const { title, subTitle, subMenuItems, caret = true } = props;
  const columnClass = (() => {
    return "grid-cols-1";
  })();

  const [isVisible, toggleVisibility, ref] = useToggleVisibility(false);

  return (
    <div ref={ref} onClick={toggleVisibility}>
      <div className="group relative flex cursor-pointer flex-col">
        <div className="flex items-center gap-x-1">
          <h4 className="text-sm font-medium uppercase">{title}</h4>
          {caret && subMenuItems && (
            <span>
              <CarretDownIcon width={10} height={10} />
            </span>
          )}
        </div>
        <span className="text-[10px] leading-[10px] text-white/50">
          {subTitle}
        </span>
        <ul
          className={`${columnClass} w-max py-2 ${isVisible ? "grid" : "hidden"}`}
        >
          {subMenuItems &&
            subMenuItems.map(({ title, href }: any) => (
              <li className="px-6 py-2">
                <span className="relative after:absolute after:left-0 after:top-full after:h-[2px] after:w-0 after:bg-slate-400 after:duration-100 hover:after:w-full">
                  {title}
                </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenuItem;
