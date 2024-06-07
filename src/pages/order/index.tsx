import { Outlet, useLocation } from "react-router-dom";
import { Button } from "../../components";
import TabTitleItem from "../../containers/view-cart-container/tabTitleItem";
import React from "react";

interface ITabIconProps {
    isActived: boolean;
}

const Order = () => {

    const location = useLocation();

    const tabTitles = [
        {
            icon: ({ isActived }: ITabIconProps) => (
                <Button type={isActived ? "second" : "white"} twClasses="h-[40px] px-[18px] rounded">
                    1
                </Button>
            ),
            tabTitle: "Giỏ hàng",
            href: "/order/",
        },
        {
            icon: ({ isActived }: ITabIconProps) => (
                <Button type={isActived ? "second" : "white"} twClasses="h-[40px] px-[18px] rounded">
                    2
                </Button>
            ),
            tabTitle: "Thanh toán",
            href: "/order/payment",
        },
        {
            icon: ({ isActived }: ITabIconProps) => (
                <Button type={isActived ? "second" : "white"} twClasses="h-[40px] px-[18px] rounded">
                    3
                </Button>
            ),
            tabTitle: "Hoàn tất đơn hàng",
            href: "/order/received",
        }
    ]
    return (
        <div className="max-w-[1400px] mx-auto my-[150px]">
            <ul className="flex justify-center items-center gap-x-20 flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                {
                    tabTitles.map((tab, index) => (
                        <React.Fragment key={tab.href}>
                            <li className="me-2">
                                <TabTitleItem
                                    isActived={location.pathname === tab.href}
                                    icon={tab.icon({
                                        isActived: location.pathname === tab.href
                                    })}
                                    tabTitle={tab.tabTitle}
                                />
                            </li>
                            {index < tabTitles.length - 1 && <i className="ti ti-arrow-right text-slate-500 font-bold"></i>}
                        </React.Fragment>
                    ))
                }
            </ul>
            <ul className="p-12">
                <li>
                    <Outlet />
                </li>
            </ul>
        </div>
    )
}

export { default as BasketTab } from "./basketTab";
export { default as PaymentTab } from "./paymentTab";
export { default as ReceivedTab } from "./receivedTab";
//ReceivedTab
export default Order;