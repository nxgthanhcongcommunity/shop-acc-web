import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { useTotal } from "../../hooks";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";

const PaymentTab = ({ handleTabChange }: any) => {

    const items = useSelector((state: RootState) => state.cart.items);
    const checkedItems = items.filter(item => item.isChecked === true);
    const [total] = useTotal(checkedItems);

    const auth = useSelector((state: RootState) => state.auth.entity);
    console.log("auth: ", auth)

    const navigate = useNavigate();

    const handlePaymentClick = () => {

        if (auth.account == null) {
            return navigate("/signup");
        }



        handleTabChange(2);
    }

    return (
        <>
            <h1 className="mt-16 text-2xl font-bold mb-4">Review lại đơn hàng</h1>
            <div className="bg-primary px-12 py-4">
                <ul>
                    <li>
                        <div className="py-7 text-lg font-medium border-b border-slate-800 grid grid-cols-[3fr_1fr_1fr]">
                            <p>
                                Account vegate full options
                            </p>
                            <span className="text-right">2 x 20.000 vnđ</span>
                            <span className="text-right">40.000 vnđ</span>
                        </div>
                    </li>
                    <li>
                        <div className="py-7 text-lg font-medium border-b border-slate-800 grid grid-cols-[3fr_1fr_1fr]">
                            <p>
                                Account vegate full options
                            </p>
                            <span className="text-right">2 x 20.000 vnđ</span>
                            <span className="text-right">40.000 vnđ</span>
                        </div>
                    </li>
                    <li>
                        <div className="py-7 text-lg font-medium border-b border-slate-800 grid grid-cols-[4fr_1fr]">
                            <p>
                                Tổng phụ
                            </p>
                            <span className="text-right">20.000 vnđ</span>
                        </div>
                    </li>
                    <li>
                        <div className="py-7 text-lg font-medium border-b border-slate-800 grid grid-cols-[4fr_1fr]">
                            <p>
                                Hình thức thanh toán
                            </p>
                            <span className="text-right">Điểm</span>
                        </div>
                    </li>

                    <li>
                        <div className="py-7 text-2xl font-medium text-3like grid grid-cols-[4fr_1fr]">
                            <p>
                                Tổng cộng
                            </p>
                            <span className="text-right">20.000 vnđ</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="mt-12">
                <div className="w-1/2 ml-auto">
                    <Button type="primary" twClasses="w-full" onClick={handlePaymentClick}>Thanh toán</Button>
                </div>
            </div>
        </>
    )
}

export default PaymentTab;