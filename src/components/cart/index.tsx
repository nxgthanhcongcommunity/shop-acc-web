import { useState } from "react";
import { CartShoppingIcon, XmarkIcon } from "../../assets/icons";

const MenuCart = (props: any) => {
  const { isShow } = props;
  return (
    <div
      className={`hidden__content hidden__content--left ${isShow && "hidden__content--show"}`}
    >
      <div className="px-6 py-8">
        <ul className="grid max-h-[150px] gap-y-5 overflow-y-scroll">
          {[1, 2, 6, 6, 6, 6, 6, 6, 6, 3].map((item, index) => (
            <li className="flex justify-between px-4" key={index}>
              <img
                src="https://html.nkdev.info/youplay/assets/images/dark/game-bloodborne-500x375.jpg"
                alt=""
                width={100}
                className="-skew-x-6"
              />
              <div className="justfy-center flex min-w-[250px] grow flex-col items-start px-6">
                <h5 className="text-sm font-bold">Bloodborne</h5>
                <p className="text-sm">1 x $30.00</p>
              </div>
              <span>
                <XmarkIcon width={14} height={14} className="font-bold" />
              </span>
            </li>
          ))}
        </ul>
        <h3 className="mb-4 mt-8 px-6 text-right">
          <span className="text-sm font-bold">Subtotal: </span>
          <span className="text-sm">$70.00</span>
        </h3>
        <div className="h-2"></div>
        <div className="flex justify-end gap-x-4">
          <button className="h-[46px] grow rounded-xl font-bold text-white hover:bg-blue-700">
            View cart
          </button>
          <button className="h-[46px] grow rounded-xl bg-[#1745a5] font-bold text-white hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className="group relative cursor-pointer"
      onClick={() => setIsShow((prev) => !prev)}
    >
      <CartShoppingIcon width={20} height={20} />
      <MenuCart isShow={isShow} />
    </div>
  );
};

export default Cart;
