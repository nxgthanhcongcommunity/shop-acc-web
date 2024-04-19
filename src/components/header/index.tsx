
import { useState } from "react";
import {
  CarretDownIcon,
  CartShoppingIcon,
  GamePadIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "../../assets/icons";
import { IHeaderProps, IMenuItemProps } from "../../types";
import Button from "../button";
import HiddenContainer from "../hidden-container";
import MenuCart from "../menu-cart";
import Menu from "./menu";
import MenuItem from "./menu/menu-item";
import UnLoginUserItem from "./menu/unlogin-user-item";

const Header = (props: IHeaderProps) => {

  const {logined} = props;

  const userMenuItem : IMenuItemProps = {
    title: "Ng Thanh Cong",
    subTitle: "user",
    subMenuItems: [
      {
        title: "Activity",
        href: "/",
      },
      {
        title: "Profile",
        href: "/",
      },
      {
        title: "Message",
        href: "/",
      },
      {
        title: "Activity",
        href: "/",
      },
      {
        title: "Profile",
        href: "/",
      },
      {
        title: "Message",
        href: "/",
      },
    ],
    column: 1,
  }

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 h-[80px] w-screen bg-headerBackground">
      <div className="mx-auto flex h-full max-w-[1170px] items-center justify-between">
        <div className="flex items-center gap-x-12">
          <div className="flex items-center gap-x-3">
            <GamePadIcon width={40} height={40} />
            <h1 className="text-2xl font-medium">Shop Acc LH</h1>
          </div>
          <Menu />
        </div>
        <div className="">
          <ul className="flex items-center gap-x-6">
            <li>
              <MagnifyingGlassIcon width={14} height={14} />
            </li>
            <li className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <CartShoppingIcon width={14} height={14} />
              <HiddenContainer isShow={isHovered} side="bottom-left">
                <MenuCart />
              </HiddenContainer>
            </li>
            {
              logined
                ? (
                  <MenuItem {...userMenuItem} />
                )
                : (
                  <UnLoginUserItem />
                )
            }
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
