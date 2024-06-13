import { Link } from "react-router-dom";
import { CdlImage } from "..";
import { selectMaster } from "../../stores/features/masterSlice";
import { useSelector } from "../../stores/hooks";

const Logo = () => {

  const masterData = useSelector(selectMaster);
  if (masterData == null) { return <p>Loading...</p> }

  const { logoUrl, shopName } = masterData.entity;

  return (
    <Link to="/">
      <div className="flex items-center gap-x-3">
        <CdlImage id={logoUrl} w={16 * 4} h={16 * 4} />
        <h1 className="text-2xl font-medium">{shopName}</h1>
      </div>
    </Link>
  );
};

export default Logo;
