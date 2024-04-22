import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores";
import { setActivedMobileNav } from "../../stores/features/appSlice";
import "./style.css";

const MenuToggle = () => {

    const dispath = useDispatch();
    const {activedMobileNav} = useSelector((state: RootState) => state.app)

    return (
        <div className={`menu-toggle ${activedMobileNav && "actived"}`} onClick={() => dispath(setActivedMobileNav(!activedMobileNav))}>
          <span className="menu-toggle__line"></span>
          <span className="menu-toggle__line"></span>
          <span className="menu-toggle__line"></span>
        </div>
    )
};

export default MenuToggle;