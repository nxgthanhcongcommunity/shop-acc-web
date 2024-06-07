import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, CdlImage } from "..";
import { RootState } from "../../stores";
import CartItemQuantity from "./cartItemQuantity";
import RemoveFromCart from "./removeFromCart";
import { useTotal } from "../../hooks";

const CartList = () => {

    const items = useSelector((state: RootState) => state.cart.items);

    const [total] = useTotal(items);

    return <>
        <ul className="grid max-h-[250px] gap-y-10 overflow-y-scroll">
            {items.map((item, index) => (
                <li className="flex justify-between px-4" key={index}>
                    <CdlImage id={item.mainFileCLDId} w={80} h={80} />
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
            <span className="text-sm font-bold">Tổng tạm: </span>
            <span className="text-sm">{total}</span>
        </h3>
        <div className="h-12"></div>
        <div className="flex justify-end gap-x-4">
            <Link to="order">
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