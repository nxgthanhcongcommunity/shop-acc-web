import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CartShoppingIcon,
  HeartIcon,
} from "../../assets/icons";
const { REACT_APP_API_URL } = process.env

const ProductItem = ({ product }: any) => {

  return (
    <div>
      <div className="relative">
        <div className="relative">
          <div className="absolute z-10 h-full w-full bg-[#160962] opacity-20 pointer-events-none"></div>
          <img
            className="h-[300px] w-full object-cover"
            src={`${REACT_APP_API_URL}/public/products/${product.mainFileUrl}`}
            alt=""
          />
        </div>

        <div className="absolute left-4 top-4">-8%</div>
        <ul className="absolute left-1/2 top-1/2 z-[2] flex -translate-x-1/2 -translate-y-1/2 gap-x-3">
          <li>
            <HeartIcon className="h-8 w-8" />
          </li>
          <li>
            <CartShoppingIcon className="h-8 w-8" />
          </li>
          <li>
            <Link to={`/product?code=${product.code}`}>
              <ArrowRightIcon className="h-8 w-8" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-lg mt-4">
        <p>
          <span className="font-bold mr-2">Tên tài khoản:</span>{product.name}
        </p>
        <p>
          <span className="font-bold mr-2">Server:</span>{product.server}
        </p>
        <p>
          <span className="font-bold mr-2">Gem/Chono:</span>{product.gemChono}
        </p>
        <p>
          <span className="font-bold mr-2">Giá:</span>{product.price || 10000}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
