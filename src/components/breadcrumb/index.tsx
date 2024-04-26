import { CarretDownIcon } from "../../assets/icons";

const BreadCrumb = () => {
    return (
        <div className="h-[40vh] bg-[#12082d] flex flex-col items-center justify-center">
            <div className="h-[120px]"></div>
            <h1 className="text-3xl lg:text-6xl font-bold">Shop</h1>
            <CarretDownIcon className="lg:h-12 h-6 lg:w-12 w-6" />
        </div>
    )
}

export default BreadCrumb;