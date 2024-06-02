import { Logo, Menu } from "../../components";
import RightMenu from "../../components/menu/rightMenu";
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
        <RightMenu />
      </div>
    </header>
  );
};

export default Header;
