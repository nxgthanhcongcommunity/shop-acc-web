import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CartShoppingIcon,
  HeartIcon,
} from "../../assets/icons";
import { useState } from "react";
const { REACT_APP_API_URL } = process.env

const ProductItem = ({ product }: any) => {

  const [isShowIcons, setIsShowIcons] = useState<boolean>(false);

  return (
    <div>
      <div className="relative ">
        <div onMouseEnter={() => setIsShowIcons(true)} onMouseLeave={() => setIsShowIcons(false)}>
          <div className="relative h-[200px] overflow-hidden">
            <div className="absolute z-10 h-full w-full bg-[#160962] opacity-20 pointer-events-none"></div>
            <img
              className={`h-full w-full duration-300 object-cover ${isShowIcons ? "scale-110" : "scale-100"}`}
              src={`${REACT_APP_API_URL}/public/products/${product.mainFileUrl}`}
              alt=""
            />
          </div>
          <div className="absolute left-4 top-4">-8%</div>
          <ul className={`duration-300 absolute left-1/2 flex top-1/2 -translate-x-1/2 -translate-y-1/2 gap-x-3 z-20 ${isShowIcons ? "opacity-100" : "opacity-0"}`}>
            <li>
              <button className="bg-white w-9 h-9 flex justify-center items-center rounded-md">
                <i className="ti ti-heart text-black text-xs"></i>
              </button>
            </li>
            <li>
              <button className="bg-white w-9 h-9 flex justify-center items-center rounded-md">
                <i className="ti ti-shopping-cart text-black"></i>
              </button>
            </li>
            <li>
              <Link to={`/product?code=${product.code}`}>
                <button className="bg-white w-9 h-9 flex justify-center items-center rounded-md">
                  <i className="ti ti-arrow-right text-black text-xs"></i>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <p>
          <span className="font-bold text-lg">{product.name}</span>
        </p>
        <p>
          <span className="font-bold mr-2 text-2Like">{product.price || "10.000"} vnđ</span>
        </p>
        <p>
          <span className="mr-2 font-medium">Gem/Chono:</span>
          <span>50.000</span>
          {/* <span>{product.gemChono}</span> */}
        </p>

      </div>
    </div>
  );
};

export default ProductItem;
