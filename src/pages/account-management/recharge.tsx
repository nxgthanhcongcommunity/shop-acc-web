import { SubmitHandler, useForm } from "react-hook-form";
import { vnpayTransactionApi } from "../../api";
import { Button, SelectField } from "../../components";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";

const Recharge = () => {

  const auth = useSelector((state: RootState) => state.auth);

  const handlePayment = async () => {
    const { succeed, data } = await vnpayTransactionApi.CreatePaymentUrl({
      amount: 10000,
      accountCode: "" + auth.entity?.code,
    });

    if (!succeed) return;
    window.location.href = data.paymentUrl;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data)
    reset();
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
          <SelectField />
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
