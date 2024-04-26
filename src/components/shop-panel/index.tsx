import { MagnifyingGlassIcon, XmarkIcon } from "../../assets/icons";

const ShopPanel = () => {
    return (
        <div className="bg-[#12082d] p-8 lg:mt-0 mt-24 w-full">
            <div className="py-6">
                <h3 className="text-2xl font-semibold mb-8">Cart</h3>
                <ul className="grid gap-y-4">
                    {[1, 2, 3].map(() => (
                        <li>
                            <div className="flex justify-between gap-4 items-center">
                                <img className="w-[80px] h-[80px] object-cover" src="https://imba.themerex.net/wp-content/uploads/2022/12/imba-prod-4-copyright-460x460.jpg" alt="" />
                                <div className="grow">
                                    <p className="text-[20px] font-bold">Imperial pint cup</p>
                                    <span className="text-[20px] font-semibold text-slate-400">1 x 30.000 vnđ</span>
                                </div>
                                <XmarkIcon className="w-4 h-4 fill-slate-400" />
                            </div>
                        </li>
                    ))}
                </ul>
                <p className="my-10 text-xl font-bold">Subtotal: <span>57.000 vnđ</span></p>
                <div className="flex gap-x-8">
                    <button className="bg-[#1745a5] hover:bg-blue-700 text-white font-bold grow h-[46px] rounded-xl">
                        View cart
                    </button>
                    <button className="hover:bg-blue-700 text-white font-bold grow h-[46px] rounded-xl">
                        Checkout
                    </button>
                </div>
            </div>
            <div className="py-6">
                <h3 className="text-2xl font-semibold mb-8">Search</h3>
                <div className="flex items-center border-[1px] rounded-xl border-slate-700 text-slate-500">
                    <span className="p-4">
                    <MagnifyingGlassIcon className="w-4 h-4" />
                    </span>
                    <input placeholder="Tìm kiếm sản phẩm..." className="grow py-3 bg-transparent outline-none" type="text" name="" id="" />
                </div>
            </div>
            <div className="py-6">
                <h3 className="text-2xl font-semibold mb-8">Categories</h3>
                <ul className="grid gap-y-4">
                    {
                        [1,2,3,4,5].map(() => (
                            <li className="flex items-center gap-x-3">
                                <span className="block w-[6px] h-[6px] bg-slate-300 rounded-full"></span>
                                <p className="text-lg text-slate-400">Accessories</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="py-6">
                <h3 className="text-2xl font-semibold mb-8">Tags</h3>
                <ul className="flex flex-wrap gap-1">
                    {
                        [1,2,3,4,5,6,7,8,9].map(() => (
                            <li className="flex items-center gap-x-3 px-3 py-1 rounded-md border border-slate-700 text-slate-400 font-medium">
                                Athletic
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ShopPanel;