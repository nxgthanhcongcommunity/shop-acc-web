import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HeaderContainer } from ".";
import { MenuToggle, MobileNavbar } from "../components";
import Footer from "./footer";

const Layout = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div
            className="relative text-white"
        >
            <MobileNavbar />
            <MenuToggle />
            <HeaderContainer />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;