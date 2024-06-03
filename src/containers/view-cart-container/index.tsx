import { useEffect, useState } from "react";
import { Button, CopyInput } from "../../components";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";
import { Link } from "react-router-dom";

const ViewCartContainer = () => {

    const items = useSelector((state: RootState) => state.cart.items);
    const [states, setStates] = useState({
        provision: 0,
        total: 0,
    })

    useEffect(() => {

        const total = items.reduce((accumulator, currentValue) => {
            debugger
            return accumulator + (+currentValue.price * currentValue.quantity);
        }, 0)

        setStates({
            provision: total,
            total: total,
        })

    }, [items])

    // return (
    //     <div className="max-w-[1400px] mx-auto my-[150px]">
    //         <ul className="w-[70%] mx-auto flex justify-between">
    //             <li className="inline-flex items-center gap-x-4">
    //                 <Button type="second" twClasses="h-[40px] px-[18px] rounded">
    //                     1
    //                 </Button>
    //                 <p className="font-bold text-xl">
    //                     Giỏ hàng
    //                 </p>
    //             </li>
    //             <li className="inline-flex items-center gap-x-4">
    //                 <Button type="second" twClasses="h-[40px] px-[18px] rounded">
    //                     2
    //                 </Button>
    //                 <p className="font-bold text-xl">
    //                     Thanh toán
    //                 </p>
    //             </li>
    //             <li>
    //                 <i className="ti ti-arrow-right text-slate-500 font-bold"></i>
    //             </li>
    //             <li className="inline-flex items-center gap-x-4">
    //                 <Button type="white" twClasses="h-[40px] px-[18px] rounded">
    //                     3
    //                 </Button>
    //                 <p className="font-bold text-xl">
    //                     Tổng kết
    //                 </p>
    //             </li>
    //         </ul>

    //         <ul>
    //             <li className="hidden">
    //                 <div className="relative overflow-x-auto mt-20">
    //                     <table className="w-full text-md text-left rtl:text-right text-gray-200">
    //                         <thead className="text-md text-gray-200 uppercase bg-primary">
    //                             <tr>
    //                                 <th scope="col" className="px-6 py-8">
    //                                     Sản phẩm
    //                                 </th>
    //                                 <th scope="col">
    //                                     Giá
    //                                 </th>
    //                                 <th scope="col">
    //                                     Số lượng
    //                                 </th>
    //                                 <th scope="col">
    //                                     Tạm tính
    //                                 </th>
    //                                 <th scope="col">
    //                                     Xóa
    //                                 </th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             {
    //                                 items.map((item) => (
    //                                     <tr className="bg-transparent border-b border-slate-700 font-medium">
    //                                         <th
    //                                             scope="row"
    //                                             className="px-6 py-10 font-bold text-xl whitespace-nowrap"
    //                                         >
    //                                             <div className="flex items-center gap-x-4">
    //                                                 <span className="w-16 h-16 rounded-full overflow-hidden block">
    //                                                     <img src={item.mainFileUrl} alt="" />
    //                                                 </span>
    //                                                 {item.name}
    //                                             </div>
    //                                         </th>
    //                                         <td>{item.price} vnđ</td>
    //                                         <td>
    //                                             <input
    //                                                 className="w-16 rounded-md border border-slate-600 bg-transparent px-2 py-1 text-slate-300 outline-none"
    //                                                 type="number"
    //                                                 name=""
    //                                                 id=""
    //                                                 // onChange={handleItemQuantityChange}
    //                                                 value={item.quantity}
    //                                             />
    //                                         </td>
    //                                         <td>{item.quantity * item.price} vnđ</td>
    //                                         <td>
    //                                             <i className="ti ti-close text-slate-500 font-bold cursor-pointer"></i>
    //                                         </td>
    //                                     </tr>
    //                                 ))
    //                             }
    //                         </tbody>
    //                     </table>
    //                 </div>

    //                 <div className="mt-20 grid grid-cols-12">
    //                     <div className="col-span-7"></div>
    //                     <div className="col-span-5">
    //                         <p className="font-bold text-2xl mb-4">Cart totals</p>
    //                         <table className="w-full text-md text-left rtl:text-right text-gray-200">
    //                             <thead>
    //                             </thead>
    //                             <tbody>
    //                                 <tr className="bg-transparent border border-slate-700 font-medium flex">
    //                                     <td className="py-4 bg-primary w-[200px] flex justify-center items-center font-bold">Tạm tính</td>
    //                                     <td className="flex justify-start items-center px-6">
    //                                         {states.provision} vnđ
    //                                     </td>
    //                                 </tr>
    //                                 <tr className="bg-transparent border border-slate-700 font-medium flex">
    //                                     <td className="py-4 bg-primary w-[200px] flex justify-center items-center font-bold">Tổng cộng</td>
    //                                     <td className="flex justify-start items-center px-6">
    //                                         {states.total} vnđ
    //                                     </td>
    //                                 </tr>
    //                             </tbody>
    //                         </table>
    //                         <div className="mt-12">
    //                             <Link to="/payment">
    //                                 <Button type="primary" twClasses="w-full">Thanh toán</Button>
    //                             </Link>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </li>
    //             <li>
    //                 <div className="grid place-items-center">
    //                     <div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800">
    //                         <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
    //                             THÔNG TIN TÀI KHOẢN NGÂN HÀNG
    //                         </h2>
    //                         <p className="mb-6 text-gray-500 dark:text-gray-400">
    //                             Các giao dịch chuyển sai "Nội dung chuyển khoản" sẽ không được xử lý
    //                             tự động. Hãy liên hệ{" "}
    //                             <a
    //                                 href="/"
    //                                 className="font-medium text-blue-700 underline hover:no-underline dark:text-blue-500"
    //                             >
    //                                 Fanpage
    //                             </a>{" "}
    //                             để được hỗ trợ.
    //                         </p>
    //                         <CopyInput />
    //                         <CopyInput />
    //                         <CopyInput />
    //                         <CopyInput />
    //                     </div>
    //                 </div>
    //             </li>
    //         </ul>

    //     </div>
    // )

    return (
        <div className="max-w-[1400px] mx-auto my-[150px]">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="me-2">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    >
                        <svg
                            className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                        </svg>
                        Profile
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
                        aria-current="page"
                    >
                        <svg
                            className="w-4 h-4 me-2 text-blue-600 dark:text-blue-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 18"
                        >
                            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                        </svg>
                        Dashboard
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    >
                        <svg
                            className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
                        </svg>
                        Settings
                    </a>
                </li>
                <li className="me-2">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    >
                        <svg
                            className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 20"
                        >
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                        </svg>
                        Contacts
                    </a>
                </li>
                <li>
                    <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                        Disabled
                    </a>
                </li>
            </ul>
            <ul className="p-12">
                <li>
                    <h2 className="text-4xl font-bold mb-4">Sản phẩm của bạn:</h2>
                    <div className="p-12 bg-primary">
                        <table className="w-full text-md text-left rtl:text-right text-gray-200 bg-primary">
                            <thead>
                            </thead>
                            <tbody>
                                <tr className="bg-transparent font-medium flex text-2xl border-b border-slate-700">
                                    <td className="py-8 w-1/2 flex justify-start items-center font-bold">Sản phẩm checkout 1</td>
                                    <td className="flex justify-start items-center px-6">
                                        {states.provision} vnđ
                                    </td>
                                </tr>
                                <tr className="bg-transparent font-medium flex text-2xl border-b border-slate-700">
                                    <td className="py-8 w-1/2 flex justify-start items-center font-bold">Sản phẩm checkout 1</td>
                                    <td className="flex justify-start items-center px-6">
                                        {states.provision} vnđ
                                    </td>
                                </tr>
                                <tr className="bg-transparent font-medium flex text-2xl border-b border-slate-700">
                                    <td className="py-8 w-1/2 flex justify-start items-center font-bold">Sản phẩm checkout 1</td>
                                    <td className="flex justify-start items-center px-6">
                                        {states.provision} vnđ
                                    </td>
                                </tr>
                                <tr className="bg-transparent font-medium flex text-2xl border-b border-slate-700">
                                    <td className="py-8 w-1/2 flex justify-start items-center font-bold">Sản phẩm checkout 1</td>
                                    <td className="flex justify-start items-center px-6">
                                        {states.provision} vnđ
                                    </td>
                                </tr>
                                <tr className="bg-transparent font-medium flex text-2xl border-b border-slate-700 text-3like">
                                    <td className="py-8 w-1/2 flex justify-start items-center font-bold ">Tổng cộng</td>
                                    <td className="flex justify-start items-center px-6">
                                        {states.provision} vnđ
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12">
                        <div className="w-1/2 ml-auto">
                            <Button type="primary" twClasses="w-full">Thanh toán</Button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default ViewCartContainer;