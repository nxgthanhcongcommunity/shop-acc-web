import { useEffect, useState } from "react";
import { accountApi } from "../../api";
import { useWebSocket } from "../../providers/webSocketContext";
import useOutsideClick from "../../hooks/useOutsideClick";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";
import { useToast } from "../../providers/toastContext";
import { TOASTMSG_TYPES } from "../../constants";

const Notification = () => {

  const { addToastMessage } = useToast();

  const auth = useSelector((state: RootState) => state.auth);

  const [isHasNewNoti, setIsHasNewNoti] = useState(false);
  const [notifications, setNotifications] = useState<any>([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (auth.entity == null) return;

    (async () => {
      const response = await accountApi.GetNotifications({
        accountCode: auth.entity?.code,
      });

      console.log(response);

      if (!response.succeed) {
        return;
      }

      setNotifications(response.data.notifications);
    })();
  }, [toggle, auth.entity]);

  const ws = useWebSocket();

  const handleMessage = (event: MessageEvent) => {
    const message = JSON.parse(event.data);

    if (message.type === "BALANCE" && message.accountId === auth.entity?.id) {
      setNotifications((prevNotifications: any) => [
        message,
        ...prevNotifications,
      ]);
      setIsHasNewNoti(true);

      addToastMessage({
        id: ("" + Date.now()),
        type: TOASTMSG_TYPES.SUCCESS,
        title: message.title,
        content: message.content,
      });
    }

  };

  useEffect(() => {
    if (!ws) return;

    ws.addEventListener('message', handleMessage);

    return () => {
      ws.removeEventListener('message', handleMessage);
    };
  }, [ws]);


  const [isShow, dropDownRef, handleClick, handleMouseLeave] =
    useOutsideClick<HTMLDivElement>();

  useEffect(() => {
    isShow && setIsHasNewNoti(false);
  }, [isShow])

  const handleMarkNotificationsRead = async (item?: any) => {

    console.log(item);

    const { succeed, data } = await accountApi.MarkNotificationsRead({
      code: item.code,
    });
    setToggle((prev) => !prev);

  };

  return (
    <div className="relative flex" ref={dropDownRef}>
      <h4 className="text-sm font-semibold uppercase" onClick={handleClick}>
        <div className="relative">
          <svg
            fill="currentColor"
            className="h-5 w-5 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
          </svg>
          {/* <div className="w-4 h-[18px] bg-white absolute rounded-full right-[-6px] top-[-12px]">
            <div className="bg-[#12082d] absolute inset-[2px] rounded-full flex justify-center items-center">
              <span className="text-[8px]">10</span>
            </div>
          </div> */}
          <div className={`w-2 h-2 absolute right-0 top-0 bg-green-900 rounded-full ${isHasNewNoti ? "block" : "hidden"}`}>

          </div>
        </div>
      </h4>
      <div
        className={`${isShow ? "visible top-[calc(100%+10px)] opacity-100" : "invisible top-full opacity-0"} absolute right-[-10px] z-searchBar w-[30vw] bg-hidden p-8 pb-6 duration-500`}
      // onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full">
          <div className="flex max-h-[400px] flex-col gap-y-3 overflow-y-scroll">
            {notifications.map((item: any) => (
              <div
                key={item.id}
                className={`cursor-pointer p-4 text-sm font-medium ${item.isViewed ? "bg-primary" : "bg-gray-700"}`}
                onClick={() => handleMarkNotificationsRead(item)}
              >
                <p className="uppercase text-hightLight">{item.title}</p>
                <div className="">{item.content}</div>
                <p className="text-right text-[12px] text-slate-400">
                  {item.createdAt}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-right mt-4 underline cursor-pointer" onClick={() => handleMarkNotificationsRead()}>Đánh dấu tất cả là đã đọc</p>
      </div>
    </div>
  );
};

export default Notification;
