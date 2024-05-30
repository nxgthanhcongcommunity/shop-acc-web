import { useState } from "react";
import { CartShoppingIcon, XmarkIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { Button } from "..";
import CartList from "./cartList";

const MenuCart = {
  PC: (props: any) => {

    const { isShow } = props;

    return (
      <div
        className={`cursor-auto hidden__content hidden__content--left ${isShow && "hidden__content--show"}`}
      >
        <div className="px-6 py-8 min-w-[500px]">
          <CartList />
        </div>
      </div>
    );
  },
  Mobile: (props: any) => {
    const { isShow } = props;
    return (
      <div className={`py-8 ${isShow ? "block" : "hidden"}`}>
        <ul className="grid max-h-[150px] gap-y-5 overflow-y-scroll">
          {[1, 2, 6].map((item, index) => (
            <li className="flex justify-between" key={index}>
              <img
                src="https://html.nkdev.info/youplay/assets/images/dark/game-bloodborne-500x375.jpg"
                alt=""
                className="w-[70px] object-cover"
              />
              <div className="justfy-center flex grow flex-col items-start px-6">
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
    );
  },
}

const Cart = {
  PC: () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative cursor-pointer after:absolute after:top-full after:right-0 after:w-[150%] after:h-8 after:bg-transparent"
      >
        <CartShoppingIcon width={20} height={20} />
        <MenuCart.PC isShow={isVisible} />
      </div>
    );
  },
  Mobile: () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group cursor-pointer"
      >
        <CartShoppingIcon width={20} height={20} />
        <MenuCart.Mobile isShow={isVisible} />
      </div>
    );
  },
}

export { MenuCart };
export default Cart;
