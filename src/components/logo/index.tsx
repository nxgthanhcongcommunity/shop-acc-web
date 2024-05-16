import { Link } from "react-router-dom";
import { useSelector } from "../../stores/hooks";
import { selectMaster, selectMasterLoading } from "../../stores/features/masterSlice";
const { REACT_APP_API_URL } = process.env;

const Logo = () => {

  const masterData = useSelector(selectMaster);
  const masterDataLoading = useSelector(selectMasterLoading);

  if (masterDataLoading) { return <p>loading...</p> }

  const { logoUrl, shopName } = masterData.entity;

  return (
    <Link to="/">
      <div className="flex items-center gap-x-3">
        <img
          src={`${REACT_APP_API_URL}/public/masters/${logoUrl}`}
          className="h-12 w-12 lg:h-16 lg:w-16 object-contain"
          alt=""
        />
        {/* <h1 className="text-2xl font-medium">{shopName}</h1> */}
      </div>
    </Link>
  );
};

export default Logo;
