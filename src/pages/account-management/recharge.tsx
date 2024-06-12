import { SubmitHandler, useForm } from "react-hook-form";
import { vnpayTransactionApi } from "../../api";
import { Button, InputField, SelectField } from "../../components";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";
import { PAYMENT_PROVIDERS } from "../../constants";

const Recharge = () => {

  const auth = useSelector((state: RootState) => state.auth);

  const providerHandler = {
    [PAYMENT_PROVIDERS.VNPAY]: async (props: any) => {
      const { accountCode, bankCode, amount } = props;
      const { succeed, data } = await vnpayTransactionApi.CreatePaymentUrl({
        amount,
        accountCode,
        bankCode: bankCode,
      });

      if (!succeed) return;
      window.location.href = data.paymentUrl;
    }
  }

  const handlePayment = async (props: any) => {

    const { provider, bankCode, amount } = props;

    if (!auth.entity) {
      return;
    }
    await providerHandler[provider]({
      accountCode: auth.entity.code,
      bankCode,
      amount,
    })

  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = async (data) => {
    await handlePayment(data);
    reset();
  };

  return (
    <div className="grid w-full grid-cols-2 gap-x-2 p-24">
      <form className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800"
        onSubmit={handleSubmit(onSubmit)}
      >
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
          <SelectField
            field="provider"
            fieldName="*Chọn cổng thanh toán"
            items={[
              {
                value: PAYMENT_PROVIDERS.VNPAY,
                name: PAYMENT_PROVIDERS.VNPAY,
              },
            ]}
            register={register}
            validator={{ required: "Vui lòng chọn cổng thanh toán!", }}
            errors={errors}
          />
        </div>
        <div className="mt-4">
          <SelectField
            field="bankCode"
            fieldName="Chọn hình thức thanh toán"
            items={[
              {
                value: "VNPAYQR",
                name: "VNPAYQR",
              },
              {
                value: "VNBANK",
                name: "VNBANK",
              },
              {
                value: "INTCARD",
                name: "INTCARD",
              },
            ]}
            register={register}
            errors={errors}
          />
        </div>
        <div className="mt-4">
          <InputField
            type="number"
            field="amount"
            fieldName="*Nhập số tiền cần nạp"
            errors={errors}
            register={register}
            validator={{
              valueAsNumber: true,  // Ensure value is converted to number
              min: { value: 10000, message: 'Số tiền phải lớn hơn 10000' },
              required: { value: true, message: 'Vui lòng nhập số tiền' },
            }}
          />
        </div>

        <div className="mt-8 flex">
          <Button type="primary">
            Thanh toán
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Recharge;
