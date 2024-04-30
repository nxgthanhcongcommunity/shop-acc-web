import BankCard from "../../components/bank-card";

const Footer = () => {
  return (
    <div className="bg-[#12082d] pt-48">
      <div className="grid grid-cols-2 items-start justify-between gap-y-8 px-[12vw] pt-24">
        <div className="grid grid-cols-3 gap-x-24">
          <div>
            <h3 className="text-xl font-bold">Khung giờ hoạt động</h3>
            <div className="mt-6 grid gap-y-4">
              <p>Mon-Fri: 9 AM – 6 PM</p>
              <p>Mon-Fri: 9 AM – 6 PM</p>
              <p>Mon-Fri: 9 AM – 6 PM</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Văn phòng</h3>
            <div className="mt-6 grid gap-y-4">
              <p>Mon-Fri: 9 AM – 6 PM</p>
              <p>Mon-Fri: 9 AM – 6 PM</p>
              <p>Mon-Fri: 9 AM – 6 PM</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Liên kết</h3>
            <div className="mt-6 grid gap-y-4">
              <p>Mon-Fri: 9 AM – 6 PM</p>
              <p>Mon-Fri: 9 AM – 6 PM</p>
              <p>Mon-Fri: 9 AM – 6 PM</p>
            </div>
          </div>
        </div>
        {/* <BankCard /> */}
        <p className="col-span-2 mt-16 border-t border-t-slate-500 py-8 font-medium text-[rgb(186,175,220)]">
          ThemeREX © 2024. All Rights Reserved. Developer: nxgthanhcong
        </p>
      </div>
    </div>
  );
};

export default Footer;
