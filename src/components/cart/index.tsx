import { useState } from "react";
import { CartShoppingIcon } from "../../assets/icons";
import HiddenContainer from "../hidden-container";
import MenuCart from "./menu-cart";

const Cart = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CartShoppingIcon width={14} height={14} />
      <HiddenContainer show={isHovered} side="bottom-left">
        <MenuCart />
      </HiddenContainer>
    </div>
  );
};

export default Cart;
