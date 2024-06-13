import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HeaderContainer } from ".";
import { MenuToggle, MobileNavbar, ToastList } from "../components";
import Footer from "./footer";
import { useDispatch } from "../stores/hooks";
import { getByKey } from "../stores/features/masterSlice";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByKey("home-page"));
  }, []);

  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <div className="relative text-white">
      <ToastList />
      <MobileNavbar />
      <MenuToggle />
      <HeaderContainer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
