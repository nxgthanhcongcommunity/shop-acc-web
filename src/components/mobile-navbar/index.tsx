import { useSelector } from "react-redux";
import { RootState } from "../../stores";

const MobileNavbar = (props: any) => {

  const {activedMobileNav} = useSelector((state: RootState) => state.app)

  return (
    <div>
      <div className={`fixed duration-300 top-0 h-[100vh] w-[60vw] lg:hidden bg-[rgba(8,3,37,1)] z-50 ${activedMobileNav ? "right-0" : "-right-full"}`}></div>
    </div>
  );
};
export default MobileNavbar;
