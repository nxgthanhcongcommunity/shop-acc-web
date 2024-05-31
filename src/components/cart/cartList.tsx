import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "..";
import { RootState } from "../../stores";
import CartItemQuantity from "./cartItemQuantity";
import RemoveFromCart from "./removeFromCart";

const CartList = () => {

    const items = useSelector((state: RootState) => state.cart.items);

    return <>
        <ul className="grid max-h-[250px] gap-y-10 overflow-y-scroll">
            {items.map((item, index) => (
                <li className="flex justify-between px-4" key={index}>
                    <img
                        src="https://html.nkdev.info/youplay/assets/images/dark/game-bloodborne-500x375.jpg"
                        alt=""
                        width={80}
                    />
                    <div className="justfy-center flex grow items-start px-6">
                        <div>
                            <h5 className="text-lg font-bold">{item.name}</h5>
                            <p className="flex gap-x-2 text-md">
                                <CartItemQuantity code={item.code} />
                                x
                                <span>
                                    {item.price} vnđ
                                </span>
                            </p>
                        </div>
                    </div>
                    <RemoveFromCart code={item.code} />
                </li>
            ))}
        </ul>
        <h3 className="mb-4 mt-8 px-6 text-right">
            <span className="text-sm font-bold">Subtotal: </span>
            <span className="text-sm">$70.00</span>
        </h3>
        <div className="h-12"></div>
        <div className="flex justify-end gap-x-4">
            <Link to="view-cart">
                <Button>
                    View cart
                </Button>
            </Link>
            <Link to="checkout">
                <Button type="primary">
                    Checkout
                </Button>
            </Link>
        </div>
    </>
}

export default CartList;