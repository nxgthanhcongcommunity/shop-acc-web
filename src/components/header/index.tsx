import { MenuItem } from "..";
import {
  CarretDownIcon,
  CartShoppingIcon,
  GamePadIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "../../assets/icons";

const Header = (props: any) => {
  return (
    <header className="fixed left-0 top-0 z-50 h-[80px] w-screen bg-headerBackground">
      <div className="mx-auto flex h-full max-w-[1170px] items-center justify-between">
        <div className="flex items-center gap-x-12">
          <div className="flex items-center gap-x-3">
            <GamePadIcon width={40} height={40} />
            <h1 className="text-2xl font-medium">Shop Acc LH</h1>
          </div>
          <ul className="flex gap-x-6">
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </ul>
        </div>
        <div className="">
          <ul className="flex items-center gap-x-6">
            <MenuItem />
            <li>
              <MagnifyingGlassIcon width={14} height={14} />
            </li>
            <li>
              <CartShoppingIcon width={14} height={14} />
            </li>
            <li className="flex items-center gap-x-1">
              <UserIcon width={14} height={14} />
              <CarretDownIcon width={10} height={10} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
