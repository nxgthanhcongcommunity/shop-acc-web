import Logo from "../../components/logo";
import Menu from "../../components/menu";
import UserMenu from "../../components/user-menu";
import { useScroll } from "../../hooks";
import "./style.css";

const Header = () => {
  const isScrolled = useScroll();

  return (
    <header className={`header ${isScrolled && "header--scrolled"}`}>
      <div className="header__wrapper">
        <div className="flex items-center gap-x-20">
          <Logo />
          <Menu />
        </div>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header;
