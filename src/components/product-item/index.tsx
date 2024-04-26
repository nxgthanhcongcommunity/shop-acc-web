import { ArrowRightIcon, CartShoppingIcon, HeartIcon } from "../../assets/icons";

const ProductItem = () => {
    const icons = [HeartIcon, CartShoppingIcon, ArrowRightIcon];
    return (
        <div>
            <div className="relative">
                <img src="https://imba.themerex.net/wp-content/uploads/2022/12/imba-prod-3-copyright-600x600.jpg" alt=""  />
                <div className="absolute top-4 left-4">-8%</div>
                <ul className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <li>
                        <HeartIcon className="w-12 h-12" />
                    </li>
                    <li>
                        <CartShoppingIcon className="w-12 h-12" />
                    </li>
                    <li>
                        <ArrowRightIcon className="w-12 h-12" />
                    </li>
                </ul>
            </div>
            <h2 className="text-[22px] font-bold mt-4">Team logo pin</h2>
            <p className="text-[#baafdc] text-[20px] font-semibold">35.000 vnđ</p>
        </div>
    )
}

export default ProductItem;