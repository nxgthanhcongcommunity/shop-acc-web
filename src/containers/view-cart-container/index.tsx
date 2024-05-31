import { Button } from "../../components";

const ViewCartContainer = () => {
    return (
        <div className="max-w-[1400px] mx-auto my-[150px]">
            <ul className="w-[70%] mx-auto flex justify-between">
                <li className="inline-flex items-center gap-x-4">
                    <Button type="second" twClasses="h-[40px] px-[18px] rounded">
                        1
                    </Button>
                    <p className="font-bold text-xl">
                        Giỏ hàng
                    </p>
                </li>
                <li>
                    <i className="ti ti-arrow-right text-slate-500 font-bold"></i>
                </li>
                <li className="inline-flex items-center gap-x-4">
                    <Button type="white" twClasses="h-[40px] px-[18px] rounded">
                        2
                    </Button>
                    <p className="font-bold text-xl">
                        Thanh toán
                    </p>
                </li>
                <li>
                    <i className="ti ti-arrow-right text-slate-500 font-bold"></i>
                </li>
                <li className="inline-flex items-center gap-x-4">
                    <Button type="white" twClasses="h-[40px] px-[18px] rounded">
                        3
                    </Button>
                    <p className="font-bold text-xl">
                        Tổng kết
                    </p>
                </li>
            </ul>

            <div className="relative overflow-x-auto mt-20">
                <table className="w-full text-md text-left rtl:text-right text-gray-200">
                    <thead className="text-md text-gray-200 uppercase bg-primary">
                        <tr>
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
                            [1, 2, 3, 4].map(() => (
                                <tr className="bg-transparent border-b border-slate-700 font-medium">
                                    <th
                                        scope="row"
                                        className="px-6 py-10 font-bold text-xl whitespace-nowrap"
                                    >
                                        <div className="flex items-center gap-x-4">
                                            <span className="w-16 h-16 rounded-full overflow-hidden block">
                                                <img src="https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b" alt="" />
                                            </span>
                                            Giỏ hàng
                                        </div>
                                    </th>
                                    <td>11.000 vnđ</td>
                                    <td>
                                        <input
                                            className="w-16 rounded-md border border-slate-600 bg-transparent px-2 py-1 text-slate-300 outline-none"
                                            type="number"
                                            name=""
                                            id=""
                                            // onChange={handleItemQuantityChange}
                                            value={1}
                                        />
                                    </td>
                                    <td>40.000 vnđ</td>
                                    <td>
                                        <i className="ti ti-close text-slate-500 font-bold cursor-pointer"></i>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

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
                                    400.000 vnđ
                                </td>
                            </tr>
                            <tr className="bg-transparent border border-slate-700 font-medium flex">
                                <td className="py-4 bg-primary w-[200px] flex justify-center items-center font-bold">Tổng cộng</td>
                                <td className="flex justify-start items-center px-6">
                                    400.000 vnđ
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="mt-12">
                        <Button type="primary" twClasses="w-full">Process to checkout</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewCartContainer;