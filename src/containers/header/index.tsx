import Logo from "../../components/logo";
import Menu from "../../components/menu";
import MenuToggle from "../../components/menu-toggle";
import UserMenu from "../../components/user-menu";
import { useScroll } from "../../hooks";
import "./style.css";

const Header = () => {
  
  const isScrolled = useScroll();

  return (
    <header
      className={`header ${(isScrolled && "header--scrolled")}`}
    >
      <div className="header__wrapper">
        <Logo />
        <Menu />
        <UserMenu />
        <MenuToggle />
      </div>
    </header>
  );
};

export default Header;
