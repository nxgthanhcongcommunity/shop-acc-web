import Slider from "./slider";

const ProductContainer = () => {
    return (
        <div className="max-w-[1290px] lg:my-28 my-16 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 lg:px-0 px-6">
                <div className="col-span-2">
                    <div>
                        <Slider />
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                    right
                </div>
            </div>
        </div>
    )
}

export default ProductContainer;