import { useNavigate } from "react-router-dom";
import transactionApi from "../../api/transactionApi";
import { Button } from "../../components";

const Recharge = () => {
  const navigate = useNavigate();

  const handlePayment = async () => {
    const { succeed, data } = await transactionApi.CreatePaymentUrl({
      amount: 10000,
      provider: "VNPAY",
    });

    if (!succeed) return;

    const { paymentUrl } = data;

    console.log("paymentUrl:", paymentUrl);

    window.location.href = paymentUrl;
  };

  return (
    <div className="grid w-full grid-cols-2 gap-x-2 p-24">
      <div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          NẠP TIỀN VÀO TÀI KHOẢN
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
        <div>
          <label
            htmlFor="large"
            className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
          >
            Large select
          </label>
          <select
            id="large"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option selected>Chọn cổng thanh toán</option>
            <option value="VNPAY">VNPAY</option>
          </select>
        </div>
        <div className="mt-4">
          <label
            htmlFor="large"
            className="mb-2 block text-base font-medium text-gray-900 dark:text-white"
          >
            Large select
          </label>
          <input
            type="number"
            id="default-input"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          />
        </div>

        <div className="mt-8 flex">
          <Button type="primary" onClick={handlePayment}>
            Thanh toán
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
