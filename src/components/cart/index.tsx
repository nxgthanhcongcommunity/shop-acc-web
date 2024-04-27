import { useState } from "react";
import { CartShoppingIcon } from "../../assets/icons";
import MenuCart from "./menu-cart";

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
