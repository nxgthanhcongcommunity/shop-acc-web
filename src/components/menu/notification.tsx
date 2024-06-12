import { useEffect, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useWebSocket } from "../../hooks";
import { useGetNotificationsQuery } from "../../stores/services/master-data-api";
import { accountApi } from "../../api";

const Notification = () => {
    const accountCode = "USR-QDGVLE";

    const [currentNotifications, setCurrentNotifications] = useState<any>([]);
    const [toggle, setToggle] = useState(false);

    const { data: user } = useGetNotificationsQuery("USR-QDGVLE", {

    });

    console.log(user)

    useEffect(() => {
        if (user == null || user.notifications == null) return;

        setCurrentNotifications(user.notifications)

    }, [user, toggle])


    const wsUrl = `ws://localhost:4004?accountCode=${accountCode}`;

    useWebSocket({
        url: wsUrl,
        onMessage: (event: any) => {

            console.log(event)

            const message = JSON.parse(event.data);

            if (message.type === 'BALANCE' && message.accountId === 5) {
                setCurrentNotifications((prevNotifications: any) => [
                    message,
                    ...prevNotifications,
                ]);
            }

        },
    });

    const [isShow, dropDownRef, handleClick, handleMouseLeave] =
        useOutsideClick<HTMLDivElement>();

    const handleMarkNotificationsRead = async (item: any) => {

        console.log(item)

        const { succeed, data } = await accountApi.MarkNotificationsRead({
            code: item.code,
        })
        setToggle(prev => {
            return !prev;
        });
    }

    return (
        <div className="relative flex" ref={dropDownRef}>
            <h4 className="text-sm font-semibold uppercase" onClick={handleClick}>
                <svg fill="currentColor" className="cursor-pointer w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg>
            </h4>
            <div
                className={`${isShow ? "visible top-[calc(100%+10px)] opacity-100" : "invisible top-full opacity-0"} absolute right-[-10px] z-searchBar w-[30vw] bg-hidden p-8 pb-6 duration-500`}
            // onMouseLeave={handleMouseLeave}
            >
                <div className="relative w-full">
                    <div className="flex flex-col gap-y-3 max-h-[400px] overflow-y-scroll">
                        {
                            currentNotifications.map((item: any) => (
                                <div className={`text-sm font-medium p-4 cursor-pointer ${item.isViewed ? "bg-primary" : "bg-gray-700"}`}
                                    onClick={() => handleMarkNotificationsRead(item)}
                                >
                                    <p className="uppercase text-hightLight">{item.title}</p>
                                    <div className="">{item.content}</div>
                                    <p className="text-right text-[12px] text-slate-400">{item.createdAt}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* <p className="text-right mt-4 underline cursor-pointer" onClick={() => handleMarkNotificationsRead(item)}>Đánh dấu tất cả là đã đọc</p> */}
            </div>
        </div>
    );
}

export default Notification;