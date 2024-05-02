import { FacebookIcon, TelegramIcon } from "../../assets/icons";

const Footer = () => {
  return (
    <div className="bg-[#12082d]">
      <div className="grid grid-cols-12 items-start justify-between gap-y-8 px-[12vw] pt-24">
        <div className="col-span-12 grid grid-cols-1 gap-x-24 gap-y-12 lg:col-span-7 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Giờ hoạt động</h3>
            <div className="text-hightLight mt-6 grid gap-y-4 font-medium">
              <p>Tất cả các ngày trong tuần</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Thông tin liên hệ</h3>
            <div className="text-hightLight mt-6 grid gap-y-4 font-medium">
              <p>luhuy@gamil.com</p>
              <p>0396123456</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Liên kết</h3>
            <div className="text-hightLight mt-6 grid gap-y-4 font-medium">
              <p>Hướng dẫn thanh toán</p>
              <p>Hướng dẫn mua acc</p>
              <p>Hướng dẫn nạp thẻ</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex justify-start lg:col-span-5 lg:justify-center">
          <div className="">
            <h3 className="text-xl font-bold">Liên hệ với chúng tôi</h3>
            <div className="text-hightLight mt-6 grid gap-y-4 font-medium">
              <ul className="flex gap-x-1">
                <li className="text-md flex h-12 w-12 items-center justify-center rounded-md border border-slate-800 cursor-pointer">
                  <FacebookIcon className="h-4 w-4" />
                </li>
                <li className="text-md flex h-12 w-12 items-center justify-center rounded-md border border-slate-800 cursor-pointer">
                  <TelegramIcon className="h-4 w-4" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="col-span-12 mt-16 border-t border-t-slate-500 py-8 font-medium text-[rgb(186,175,220)]">
          All Rights Reserved. Manage by Lý Huy, dev by nxgthanhcong
        </p>
      </div>
    </div>
  );
};

export default Footer;
