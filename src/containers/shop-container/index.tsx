import { useState } from "react";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { ShopPanelContainer } from "..";
import ProductItem from "../../components/product-item";
import { useQuery } from "../../hooks";
import { useGetProductsByCategoryCodeQuery } from "../../stores/services/master-data-api";
import './paging.css';
import { MenuCart } from "../../components/cart";
import { XmarkIcon } from "../../assets/icons";
import { Link } from "react-router-dom";
import { Button } from "../../components";

const ShopContainer = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const query = useQuery();
    const categoryCode: any = ("" + query.get("code"));

    const {
        data,
        isLoading
    } = useGetProductsByCategoryCodeQuery(categoryCode);
    if (isLoading) { return <p>loading...</p> }

    const { data: products, } = data;

    const totalPages = 10;

    return (
        <div className="max-w-[1290px] lg:my-28 my-16 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:px-0 px-6">
                <div className="col-span-2">
                    <div>
                        <div className="flex justify-between lg:flex-row flex-col">
                            <p className="lg:block hidden lg:text-md text-2Like font-medium">Hiển thị 1-6 trên 8 mục</p>
                            <select name="cars" id="cars" className="outline-none bg-transparent lg:text-md font-medium w-[200px]">
                                <option value="volvo" className="text-black font-medium">Giá từ thấp đến cao</option>
                                <option value="volvo" className="text-black font-medium">Giá từ thấp đến cao</option>
                                <option value="volvo" className="text-black font-medium">Giá từ thấp đến cao</option>
                            </select>
                        </div>
                        <ul className="mt-8 grid lg:grid-cols-3 gap-10">
                            {
                                products.map((product: any) => (
                                    <ProductItem key={product.code} product={product} />
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
                    <ShopPanelContainer />
                </div>
            </div>
        </div>
    )
}

export default ShopContainer;