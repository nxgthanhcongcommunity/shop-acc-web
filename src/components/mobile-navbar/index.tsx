import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserIcon } from "../../assets/icons";
import { RootState } from "../../stores";
import { selectMaster } from "../../stores/features/masterSlice";
import { IMenuItemProps } from "../../types";
import Cart from "../cart";
import MobileMenuItem from "../mobile-menu-item";
import NeonText from "../neon-text";
import SearchBar from "../search-bar";

const MobileNavbar = (props: any) => {
  const { activedMobileNav } = useSelector((state: RootState) => state.app);

  const masterData = useSelector(selectMaster);
  if (masterData == null) { return <p>Loading...</p> }

  const { menuItems }: { menuItems: IMenuItemProps[] } = masterData.entity;

  return (
    <div>
      <div
        className={`z-mobileMenu fixed top-0 h-[100vh] w-full overflow-y-scroll bg-[rgba(8,3,37,1)] duration-300 lg:hidden ${activedMobileNav ? "right-0" : "-right-full"}`}
      >
        <div className="grid gap-y-4 px-6 py-20">
          <ul className="grid gap-y-4">
            {menuItems && menuItems.map((item, index) => (
              <li key={index}>
                <MobileMenuItem {...item} />
              </li>
            ))}
            <li key={menuItems && menuItems.length}>
              <Link to="/">
                <NeonText text="Nạp thẻ"
                  className="inline-block text-center text-2xl font-extrabold"
                />
              </Link>
            </li>
          </ul>
          <ul className="mt-8 flex flex-col items-strecth gap-y-4">
            <li>
              <SearchBar.Mobile />
            </li>
            <li>
              <Cart.Mobile />
            </li>
            <li>
              <MobileMenuItem title={<UserIcon className="h-4 w-4" />}
                subMenuItems={[
                  { title: "Đăng ký", href: "/" },
                  { title: "Đăng nhập", href: "/" },
                ]} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileNavbar;
