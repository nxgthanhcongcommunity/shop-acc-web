import { XmarkIcon } from "../../assets/icons";
import Button from "../button";

const MenuCart = () => {
    return (
        <div className="px-6 py-8">
            <ul className="grid gap-y-5 max-h-[150px] overflow-y-scroll">
                {
                    [1,2,6,6,6,6,6,6,6,3].map(() => (
                        <li className="flex justify-between">
                            <img src="https://html.nkdev.info/youplay/assets/images/dark/game-bloodborne-500x375.jpg" alt="" width={76} className="-skew-x-6" />
                            <div className="grow min-w-52 flex flex-col justfy-center items-start px-6">
                                <h5 className="text-sm font-bold">Bloodborne</h5>
                                <p className="text-sm">
                                    1 x $30.00
                                </p>
                            </div>
                            <span >
                                <XmarkIcon width={14} height={14} className="font-bold" />
                            </span>
                        </li>
                    ))
                }
            </ul>
            <h3 className="p-6 text-right">
                <span className="font-bold text-sm">Subtotal: </span>
                <span className="text-sm">$70.00</span>
            </h3>
            <div className="h-2"></div>
            <div className="flex gap-x-4 justify-end">
                <Button.XS>Xem giỏ hàng</Button.XS>
                <Button.XS fill>Thanh toán</Button.XS>
            </div>
        </div>
    );
}

export default MenuCart;