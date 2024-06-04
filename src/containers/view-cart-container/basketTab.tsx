
import { Button } from "../../components";
import { useTotal } from "../../hooks";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";
import { IBasketTabProps } from "./props";
import ToggleCheckedItem from "./toggleCheckItem";

const BasketTab = ({ handleTabChange }: IBasketTabProps) => {

    const items = useSelector((state: RootState) => state.cart.items);
    const checkedItems = items.filter(item => item.isChecked === true);

    const [total] = useTotal(checkedItems);

    return (
        <>
            <div className="relative overflow-x-auto mt-20">
                <table className="w-full text-md text-left rtl:text-right text-gray-200">
                    <thead className="text-md text-gray-200 uppercase bg-primary">
                        <tr>
                            <th scope="col" className="px-6 py-8">
                                Chọn
                            </th>
                            <th scope="col" className="px-6 py-8">
                                Sản phẩm
                            </th>
                            <th scope="col">
                                Giá
                            </th>
                            <th scope="col">
                                Số lượng
                            </th>
                            <th scope="col">
                                Tạm tính
                            </th>
                            <th scope="col">
                                Xóa
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item) => (
                                <tr className="bg-transparent border-b border-slate-700 font-medium">
                                    <td>
                                        <ToggleCheckedItem code={item.code} isChecked={item.isChecked || false} />
                                    </td>
                                    <th
                                        scope="row"
                                        className="px-6 py-10 font-bold text-xl whitespace-nowrap"
                                    >
                                        <div className="flex items-center gap-x-4">
                                            <span className="w-16 h-16 rounded-full overflow-hidden block">
                                                <img src={item.mainFileUrl} alt="" />
                                            </span>
                                            {item.name}
                                        </div>
                                    </th>
                                    <td>{item.price} vnđ</td>
                                    <td>
                                        <input
                                            className="w-16 rounded-md border border-slate-600 bg-transparent px-2 py-1 text-slate-300 outline-none"
                                            type="number"
                                            name=""
                                            id=""
                                            // onChange={handleItemQuantityChange}
                                            value={item.quantity}
                                        />
                                    </td>
                                    <td>{item.quantity * item.price} vnđ</td>
                                    <td>
                                        <i className="ti ti-close text-slate-500 font-bold cursor-pointer"></i>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div >

            <div className="mt-20 grid grid-cols-12">
                <div className="col-span-7"></div>
                <div className="col-span-5">
                    <p className="font-bold text-2xl mb-4">Cart totals</p>
                    <table className="w-full text-md text-left rtl:text-right text-gray-200">
                        <thead>
                        </thead>
                        <tbody>
                            <tr className="bg-transparent border border-slate-700 font-medium flex">
                                <td className="py-4 bg-primary w-[200px] flex justify-center items-center font-bold">Tạm tính</td>
                                <td className="flex justify-start items-center px-6">
                                    {total} vnđ
                                </td>
                            </tr>
                            <tr className="bg-transparent border border-slate-700 font-medium flex">
                                <td className="py-4 bg-primary w-[200px] flex justify-center items-center font-bold">Tổng cộng</td>
                                <td className="flex justify-start items-center px-6">
                                    {total} vnđ
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-12">
                        <Button type="primary" twClasses="w-full" onClick={() => handleTabChange(1)}>Tiếp tục đến bước thanh toán</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BasketTab;