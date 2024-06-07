import { Link } from "react-router-dom";
import CdlImage from "../cdl-image";

const GameAccountCard = ({ category }: any) => {

  const totalProducts = category.products.reduce((accumulator: number, currentValue: any) => accumulator + currentValue.quantity.currentQuantity,
    0)

  return (
    <div className="bg-primary m-4 overflow-hidden rounded shadow-lg transition duration-300 hover:shadow-xl">
      <Link to={`/shop?code=${category.code}`}>
        <div className="relative">
          <div className="absolute z-10 h-full w-full bg-[#160962] opacity-20"></div>
          <div className="h-[250px]">
            <CdlImage id={category.mainFileCLDId} h={250} />
          </div>
        </div>
        <div className="px-6 py-4 min-h-[150px]">
          <div className="mb-2 text-xl font-bold">{category.name}</div>
          <p className="text-base">Tài khoản hiện có: {totalProducts}</p>
        </div>
      </Link>
    </div >
  );
};

export default GameAccountCard;
