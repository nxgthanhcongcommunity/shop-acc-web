import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CartShoppingIcon,
  HeartIcon,
} from "../../assets/icons";

const ProductItem = () => {
  const icons = [HeartIcon, CartShoppingIcon, ArrowRightIcon];
  return (
    <div>
      <div className="relative">
        <div className="relative">
          <div className="absolute z-10 h-full w-full bg-[#160962] opacity-20"></div>
          <img
            src="https://assets-prd.ignimgs.com/2022/10/28/dragonballlegends-1666977025016.jpg"
            alt=""
          />
        </div>

        <div className="absolute left-4 top-4">-8%</div>
        <ul className="absolute z-20 left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2">
          <li>
            <HeartIcon className="h-12 w-12" />
          </li>
          <li>
            <CartShoppingIcon className="h-12 w-12" />
          </li>
          <li>
            <Link to="/product">
              <ArrowRightIcon className="h-12 w-12" />
            </Link>
          </li>
        </ul>
      </div>
      <h2 className="mt-4 text-[22px] font-bold">Team logo pin</h2>
      <p className="text-[20px] font-semibold text-[#baafdc]">35.000 vnđ</p>
    </div>
  );
};

export default ProductItem;
