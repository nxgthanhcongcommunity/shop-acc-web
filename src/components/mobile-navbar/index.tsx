import { useSelector } from "react-redux";
import { CartShoppingIcon, UserIcon, XmarkIcon } from "../../assets/icons";
import { menuItems } from "../../constants";
import { RootState } from "../../stores";
import MobileMenuItem from "../mobile-menu-item";
import SearchBar from "../search-bar";
import { useState } from "react";
import { IMenuItemProps } from "../../types";

const MenuCart = (props: any) => {
  const { isShow } = props;
  return (
    // <div
    //   className={`hidden__content hidden__content--left ${isShow && "hidden__content--show"}`}
    // >

    // </div>
    <div className={`py-8 ${isShow ? "block" : "hidden"}`}>
      <ul className="grid max-h-[150px] gap-y-5 overflow-y-scroll">
        {[1, 2, 6].map((item, index) => (
          <li className="flex justify-between" key={index}>
            <img
              src="https://html.nkdev.info/youplay/assets/images/dark/game-bloodborne-500x375.jpg"
              alt=""
              className="w-[70px] object-cover"
            />
            <div className="justfy-center flex grow flex-col items-start px-6">
              <h5 className="text-sm font-bold">Bloodborne</h5>
              <p className="text-sm">1 x $30.00</p>
            </div>
            <span>
              <XmarkIcon width={14} height={14} className="font-bold" />
            </span>
          </li>
        ))}
      </ul>
      <h3 className="mb-4 mt-8 px-6 text-right">
        <span className="text-sm font-bold">Subtotal: </span>
        <span className="text-sm">$70.00</span>
      </h3>
      <div className="h-2"></div>
      <div className="flex justify-end gap-x-4">
        <button className="h-[46px] grow rounded-xl font-bold text-white hover:bg-blue-700">
          View cart
        </button>
        <button className="h-[46px] grow rounded-xl bg-[#1745a5] font-bold text-white hover:bg-blue-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

const MenuItem = (props: IMenuItemProps) => {
  const { title, subMenuItems } = props;
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
      <h4 className="text-sm font-semibold uppercase">{title}</h4>
      <ul className={`grid py-2 ${isHovered ? "block" : "hidden"}`}>
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

const MobileNavbar = (props: any) => {
  const { activedMobileNav } = useSelector((state: RootState) => state.app);
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <div
        className={`z-mobileMenu fixed top-0 h-[100vh] w-[80vw] overflow-y-scroll bg-[rgba(8,3,37,1)] duration-300 lg:hidden ${activedMobileNav ? "right-0" : "-right-full"}`}
      >
        <div className="grid gap-y-4 px-6 py-20">
          <ul className="grid gap-y-4">
            {menuItems.map((item, index) => (
              <li>
                <MobileMenuItem {...item} />
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-col items-start gap-y-4">
            <li>
              <SearchBar />
            </li>
            <li>
              <div
                className="group relative cursor-pointer"
                onClick={() => setIsShow((prev) => !prev)}
              >
                <CartShoppingIcon width={20} height={20} />
                <MenuCart isShow={isShow} />
              </div>
            </li>
            <li>
              <MenuItem
                title={<UserIcon className="h-4 w-4" />}
                subMenuItems={[
                  { title: "Đăng ký", href: "/" },
                  { title: "Đăng nhập", href: "/" },
                ]}
                side="left"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileNavbar;
