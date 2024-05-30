import { Link } from "react-router-dom";
import { XmarkIcon } from "../../assets/icons";
import { Button } from "..";

const CartList = () => {
    return <>
        <ul className="grid max-h-[250px] gap-y-10 overflow-y-scroll">
            {[1, 2, 6, 6, 6, 6, 6, 6, 6, 3].map((item, index) => (
                <li className="flex justify-between px-4" key={index}>
                    <img
                        src="https://html.nkdev.info/youplay/assets/images/dark/game-bloodborne-500x375.jpg"
                        alt=""
                        width={80}
                    />
                    <div className="justfy-center flex grow items-start px-6">
                        <div>
                            <h5 className="text-lg font-bold">Bloodborne</h5>
                            <p className="flex gap-x-2 text-md">
                                <input
                                    className="w-12 rounded-md border border-slate-600 bg-transparent pl-2 text-slate-300 outline-none"
                                    type="number"
                                    name=""
                                    id=""
                                    value={1}
                                />
                                x
                                <span>
                                    $30.00
                                </span>
                            </p>
                        </div>
                    </div>
                    <span>
                        <XmarkIcon width={14} height={14} className="font-bold cursor-pointer text-slate-600" />
                    </span>
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