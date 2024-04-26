import { useState } from "react";
import ProductItem from "../../components/product-item";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import './paging.css';
import ShopPanel from "../../components/shop-panel";

const ShopContainer = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    return (
        <div className="max-w-[1290px] lg:my-28 my-16 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:px-0 px-6">
                <div className="col-span-2">
                    <div>
                        <div className="flex justify-between lg:flex-row flex-col">
                            <p className="lg:block hidden lg:text-xl text-[#baafdc] font-medium">Hiển thị 1-6 trên 8 mục</p>
                            <select name="cars" id="cars" className="outline-none bg-transparent lg:text-xl font-medium w-[300px]">
                                <option value="volvo">Giá từ thấp đến cao</option>
                                <option value="volvo">Giá từ thấp đến cao</option>
                                <option value="volvo">Giá từ thấp đến cao</option>
                            </select>
                        </div>
                        <ul className="mt-8 grid lg:grid-cols-2 gap-10">
                            {
                                [1, 2, 3, 4].map(() => (
                                    <ProductItem />
                                ))
                            }
                        </ul>
                        <div className="mt-16 flex lg:justify-start justify-center">
                            <ResponsivePagination
                                maxWidth={1}
                                current={currentPage}
                                total={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    <ShopPanel />
                </div>
            </div>
        </div>
    )
}

export default ShopContainer;