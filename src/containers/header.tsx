import { BarsIcon } from "../assets/icons";
import Cart from "../components/cart";
import Logo from "../components/logo";
import MenuItem from "../components/menu-item";
import MenuToggle from "../components/menu-toggle";
import SearchBar from "../components/search-bar";
import UserMenuItem from "../components/user-menu-item";
import { useScroll } from "../hooks";
import { IMenuItemProps } from "../types";

const Header = (props: any) => {
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

  const isScrolled = useScroll();

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-screen duration-150 ${isScrolled ? "h-[60px] bg-bodyBackground" : "lg:h-[120px] h-[100px] bg-[linear-gradient(180deg,#12082D_0%,#12082D00_100%)]"}`}
    >
      <div className="mx-auto flex h-full items-center justify-between lg:px-24 px-6">
        <div className="flex items-center gap-x-12">
          <Logo />
          <ul className="hidden gap-x-6 lg:flex ">
            {menuItems.map((item, index) => (
              <li>
                <MenuItem key={index} {...item} />
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-x-6">
            <li>
              <SearchBar />
            </li>
            <li>
              <Cart />
            </li>
            <UserMenuItem />
          </ul>
        </div>
        <MenuToggle />
      </div>
    </header>
  );
};

export default Header;
