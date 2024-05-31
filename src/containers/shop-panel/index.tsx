import { MagnifyingGlassIcon } from "../../assets/icons";
import CartList from "../../components/cart/cartList";

const ShopPanel = () => {
    return (
        <div className="bg-[#12082d] p-8 lg:mt-0 mt-24 w-full">
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
                        [1, 2, 3, 4, 5].map(() => (
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
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                            <li className="flex items-center gap-x-3 px-3 py-1 rounded-md border border-slate-700 text-slate-400 font-medium">
                                Athletic
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="py-4">
                <h3 className="text-2xl font-bold mb-8">Cart</h3>
                <div className="">
                    <CartList />
                </div>
            </div>
        </div>
    )
}

export default ShopPanel;