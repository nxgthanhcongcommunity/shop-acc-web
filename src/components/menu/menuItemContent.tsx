import LinkItem from "./linkItem";

const MenuItemContent = (props: any) => {
  const { isShow, subMenuItems, side, onMouseLeave } = props;

  return (
    <div
      className={`hidden__content ${side === "left" ? "hidden__content--left" : "hidden__content--right"} ${isShow && "hidden__content--show"}`}
      onMouseLeave={onMouseLeave}
    >
      <ul className="grid py-2">
        {subMenuItems &&
          subMenuItems.map(({ title, href, onClick }: any, index: number) => (
            <li className="flex h-16 w-[275px] items-center px-8" key={index}>
              <LinkItem href={href} title={title} onClick={onClick} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MenuItemContent;
