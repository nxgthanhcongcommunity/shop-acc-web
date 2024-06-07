import { Button, PrivateRoute } from "../../components";

const ReceivedTab = () => {
  return (
    <>
      <PrivateRoute />

      <div>
        <h2 className="mb-6 text-xl font-medium text-hightLight">
          Cảm ơn bạn, đơn hàng đã được ghi nhận. Chúng tôi gửi thông tin tài
          khoản qua email, Vui lòng check email sau vài phút nữa.
        </h2>
        <div className="flex items-stretch gap-x-6 bg-primary p-6">
          <div className="text-sm font-medium">
            <p className="uppercase text-hightLight">Mã đơn hàng: </p>
            <div className="h-1"></div>
            <p>12343</p>
          </div>
          <div className="boder-white w-[1px] border border-l border-dashed"></div>
          <div className="text-sm font-medium">
            <p className="uppercase text-hightLight">Ngày mua hàng: </p>
            <div className="h-1"></div>
            <p>June 4, 2024</p>
          </div>
          <div className="boder-white w-[1px] border border-l border-dashed"></div>
          <div className="text-sm font-medium">
            <p className="uppercase text-hightLight">Tổng cộng: </p>
            <div className="h-1"></div>
            <p>100.000 vnđ</p>
          </div>
          <div className="boder-white w-[1px] border border-l border-dashed"></div>
          <div className="text-sm font-medium">
            <p className="uppercase text-hightLight">Hình thức thanh toán: </p>
            <div className="h-1"></div>
            <p>Thanh toán bằng điểm</p>
          </div>
        </div>
        <h1 className="mb-4 mt-16 text-2xl font-bold">Chi tiết đơn hàng</h1>
        <div className="bg-primary px-12 py-4">
          <ul>
            <li>
              <div className="flex justify-between border-b border-slate-800 py-7 text-lg font-medium">
                <p>Account vegate full options x 2</p>
                <span>20.000 vnđ</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between border-b border-slate-800 py-7 text-lg font-medium">
                <p>Account vegate full options x 2</p>
                <span>20.000 vnđ</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between border-b border-slate-800 py-7 text-lg font-medium">
                <p>Tổng phụ</p>
                <span>20.000 vnđ</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between border-b border-slate-800 py-7 text-lg font-medium">
                <p>Hình thức thanh toán</p>
                <span>Điểm</span>
              </div>
            </li>

            <li>
              <div className="flex justify-between py-7 text-2xl font-medium text-3like">
                <p>Tổng cộng</p>
                <span>20.000 vnđ</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <div className="ml-auto w-1/2">
            <Button type="primary" twClasses="w-full">
              Tiếp tục mua hàng
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceivedTab;
