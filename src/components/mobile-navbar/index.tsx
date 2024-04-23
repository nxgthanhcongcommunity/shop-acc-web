import { useSelector } from "react-redux";
import { RootState } from "../../stores";
import { IMenuItemProps } from "../../types";
import MenuItem from "../menu-item";
import { MobileMenuItem } from "..";

const MobileNavbar = (props: any) => {
  const { activedMobileNav } = useSelector((state: RootState) => state.app);

  const menuItems: IMenuItemProps[] = [
    {
      title: "store",
      subTitle: "games",
      subMenuItems: [
        {
          title: "Store Style 1",
          href: "/",
        },
        {
          title: "Store Style 1",
          href: "/",
        },
        {
          title: "Store Style 1",
          href: "/",
        },
      ],
    },
    {
      title: "blog",
      subTitle: "news",
      subMenuItems: [
        {
          title: "Store Style 1",
          href: "/",
        },
        {
          title: "Store Style 1",
          href: "/",
        },
        {
          title: "Store Style 1",
          href: "/",
        },
      ],
    },
    {
      title: "features",
      subTitle: "full",
      subMenuItems: [
        {
          title: "Store Style 1",
          href: "/",
        },
        {
          title: "Store Style 1",
          href: "/",
        },
        {
          title: "Store Style 1",
          href: "/",
        },
      ],
    },
  ];

  return (
    <div>
      <div
        className={`fixed top-0 z-50 h-[100vh] w-[60vw] bg-[rgba(8,3,37,1)] duration-300 lg:hidden ${activedMobileNav ? "right-0" : "-right-full"}`}
      >
        <div className="absolute left-8 top-[15%]">
          <ul className="grid gap-y-4">
            {menuItems.map((item) => (
              <li>
                <MobileMenuItem {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileNavbar;
