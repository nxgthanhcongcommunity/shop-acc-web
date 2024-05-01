import { useSelector } from "react-redux";
import { UserIcon } from "../../assets/icons";
import { menuItems } from "../../constants";
import { RootState } from "../../stores";
import Cart from "../cart";
import MobileMenuItem from "../mobile-menu-item";
import SearchBar from "../search-bar";

const MobileNavbar = (props: any) => {
  const { activedMobileNav } = useSelector((state: RootState) => state.app);

  return (
    <div>
      <div
        className={`z-mobileMenu fixed top-0 h-[100vh] w-[80vw] bg-[rgba(8,3,37,1)] duration-300 lg:hidden ${activedMobileNav ? "right-0" : "-right-full"}`}
      >
        <div className="absolute left-8 top-[15%] grid gap-y-4">
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
              <Cart />
            </li>
            <li>
              <UserIcon className="h-4 w-4" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileNavbar;
