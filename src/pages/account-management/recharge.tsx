import { Link } from "react-router-dom";
import { Button, CopyInput } from "../../components";


const Recharge = () => {

  return (
    <div className="grid w-full grid-cols-2 gap-x-2 p-24">
      <div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          THÔNG TIN TÀI KHOẢN NGÂN HÀNG
        </h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          Các giao dịch chuyển sai "Nội dung chuyển khoản" sẽ không được xử lý
          tự động. Hãy liên hệ{" "}
          <a
            href="/"
            className="font-medium text-blue-700 underline hover:no-underline dark:text-blue-500"
          >
            Fanpage
          </a>{" "}
          để được hỗ trợ.
        </p>
        <CopyInput />
        <CopyInput />
        <CopyInput />
        <CopyInput />
      </div>

      <div className="hidden w-full max-w-lg rounded-lg border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          QUÉT MÃ QR
        </h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          Các giao dịch chuyển sai "Nội dung chuyển khoản" sẽ không được xử lý
          tự động. Hãy liên hệ{" "}
          <a
            href="/"
            className="font-medium text-blue-700 underline hover:no-underline dark:text-blue-500"
          >
            Fanpage
          </a>{" "}
          để được hỗ trợ.
        </p>
        <div className="flex items-center justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIw90kio-tn_MJCDzfR5UXKrW8bMrtURNMeQ&s"
            alt=""
          />
        </div>
      </div>

      <Button type="primary">
        <Link to={`s`} target="_blank" rel="noopener noreferrer">
          VNPAY
        </Link>
      </Button>

    </div>
  );
};

export default Recharge;
