import { CartShoppingIcon } from "../../assets/icons";
import MenuCart from "../cart/menu-cart";

const Cart = () => {
    return(
        <div
              className="group relative cursor-pointer"
            >
              <CartShoppingIcon width={14} height={14} />
              <MenuCart />
            </div>
    );
}

export default Cart;