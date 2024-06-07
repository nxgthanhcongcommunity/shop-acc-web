import { Link } from "react-router-dom";
import CdlImage from "../cdl-image";
import { useDispatch } from "../../stores/hooks";
import { addItem } from "../../stores/features/cartSlice";

const ProductItem = ({ product }: any) => {

  const dispatch = useDispatch();

  const cartItem = {
    id: product.id,
    code: product.code,
    name: product.name,
    price: product.price,
    quantity: 1,
    mainFileCLDId: product.mainFileCLDId,
  }

  const handleCartClick = () => {
    dispatch(addItem(cartItem))
  }

  return (
    <div>
      <div className="relative ">
        <div className="group">
          <div className="relative h-[200px] overflow-hidden">
            <div className="absolute z-10 h-full w-full bg-[#160962] opacity-20 pointer-events-none"></div>
            <div className="h-full w-full duration-300 object-cover scale-100 group-hover:scale-110">
              <CdlImage id={product.mainFileCLDId} />
            </div>
          </div>
          <span className="text-sm absolute right-4 bottom-4">sl: {product.quantity.currentQuantity}</span>
          <ul className="duration-300 absolute left-1/2 flex top-1/2 -translate-x-1/2 -translate-y-1/2 gap-x-3 z-20 opacity-0 group-hover:opacity-100">
            <li>
              <button className="bg-white w-9 h-9 flex justify-center items-center rounded-md">
                <i className="ti ti-heart text-black text-xs"></i>
              </button>
            </li>
            <li>
              <button
                className="bg-white w-9 h-9 flex justify-center items-center rounded-md"
                onClick={handleCartClick}
              >
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
        </p>

      </div>
    </div>
  );
};

export default ProductItem;
