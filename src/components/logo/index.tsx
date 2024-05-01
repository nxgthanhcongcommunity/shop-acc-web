import { Link } from "react-router-dom";
import { DragonIcon } from "../../assets/icons";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-x-3">
        {/* <DragonIcon width={40} height={40} /> */}
        <img src="https://i.gifer.com/XoD1.gif" className="h-16 w-16" alt="" />
        <h1 className="text-2xl font-medium">Rùa shop</h1>
      </div>
    </Link>
  );
};

export default Logo;
