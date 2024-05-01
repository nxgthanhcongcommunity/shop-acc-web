import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores";
import { setActivedMobileNav } from "../../stores/features/appSlice";
import "./style.css";
import { useScroll } from "../../hooks";

const MenuToggle = () => {
  const isScrolled = useScroll();

  const dispath = useDispatch();
  const { activedMobileNav } = useSelector((state: RootState) => state.app);

  return (
    <div
      className={`menu-toggle ${activedMobileNav && "actived"} ${isScrolled ? "top-[calc(60px/2-50px/2)]" : "top-[calc(100px/2-50px/2)]"}`}
      onClick={() => dispath(setActivedMobileNav(!activedMobileNav))}
    >
      <span className="menu-toggle__line"></span>
      <span className="menu-toggle__line"></span>
      <span className="menu-toggle__line"></span>
    </div>
  );
};

export default MenuToggle;
