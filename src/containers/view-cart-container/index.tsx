import { useState } from "react";
import { Button } from "../../components";
import BasketTab from "./basketTab";
import OrderReceived from "./orderReceived";
import PaymentTab from "./paymentTab";
import { ITabIconProps } from "./props";
import TabTitleItem from "./tabTitleItem";

const ViewCartContainer = () => {

    const [activedIndex, setActivedIndex] = useState(0);

    const handleTabChange = (newIndex: number) => {
        setActivedIndex(newIndex);
    }

    const tabTitles = [
        {
            icon: ({ isActived }: ITabIconProps) => (
                <Button type={isActived ? "second" : "white"} twClasses="h-[40px] px-[18px] rounded">
                    1
                </Button>
            ),
            tabTitle: "Giỏ hàng",
        },
        {
            icon: ({ isActived }: ITabIconProps) => (
                <Button type={isActived ? "second" : "white"} twClasses="h-[40px] px-[18px] rounded">
                    2
                </Button>
            ),
            tabTitle: "Thanh toán",
        },
        {
            icon: ({ isActived }: ITabIconProps) => (
                <Button type={isActived ? "second" : "white"} twClasses="h-[40px] px-[18px] rounded">
                    3
                </Button>
            ),
            tabTitle: "Hoàn tất đơn hàng",
        }
    ]

    const tabContents = [
        <BasketTab handleTabChange={handleTabChange} />,
        <PaymentTab handleTabChange={handleTabChange} />,
        <OrderReceived />,
    ]
    return (
        <div className="max-w-[1400px] mx-auto my-[150px]">
            <ul className="flex justify-center items-center gap-x-20 flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                {
                    tabTitles.map(({ icon, tabTitle }, index) => (
                        <>
                            <li className="me-2">
                                <TabTitleItem
                                    isActived={activedIndex === index}
                                    icon={icon({
                                        isActived: activedIndex === index
                                    })}
                                    tabTitle={tabTitle}
                                    onClick={() => handleTabChange(index)}
                                />
                            </li>
                            {index < tabTitles.length - 1 && <i className="ti ti-arrow-right text-slate-500 font-bold"></i>}
                        </>
                    ))
                }
            </ul>
            <ul className="p-12">
                <li>
                    {tabContents[activedIndex]}
                </li>
            </ul>
        </div>
    )
}

export default ViewCartContainer;