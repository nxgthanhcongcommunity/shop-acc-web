import { Link, useSearchParams } from "react-router-dom";
import { Button } from "../../components";
import { useEffect, useState } from "react";

interface IParams {
  amount: string | null;
  bankCode: string | null;
  orderInfo: string | null;
  responseCode: string | null;
  transactionStatus: string | null;
  transactionNo: string | null;
  payDate: string | null;
}

const Received = () => {
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState<IParams>();

  useEffect(() => {
    setParams({
      amount: searchParams.get("vnp_Amount"),
      bankCode: searchParams.get("vnp_BankCode"),
      orderInfo: searchParams.get("vnp_OrderInfo"),
      responseCode: searchParams.get("vnp_ResponseCode"),
      transactionStatus: searchParams.get("vnp_TransactionStatus"),
      transactionNo: searchParams.get("vnp_TransactionNo"),
      payDate: searchParams.get("vnp_PayDate"),
    });
  }, [searchParams]);

  if (params == null) return <p>loading...</p>;

  return (
    <div className="p-8">
      <h2 className="mb-6 text-xl font-medium text-hightLight">
        Bạn đã nạp thành công:{" "}
        <span className="text-3like">{params.amount} vnđ</span>
      </h2>
      <div className="flex items-stretch gap-x-10 bg-primary p-8">
        <div className="text-sm font-medium">
          <p className="uppercase text-hightLight">Mã giao dịch: </p>
          <div className="h-3"></div>
          <p>{params.transactionNo}</p>
        </div>
        <div className="boder-white w-[1px] border border-l border-dashed"></div>
        <div className="text-sm font-medium">
          <p className="uppercase text-hightLight">Ngày giao dịch: </p>
          <div className="h-3"></div>
          <p>{params.payDate}</p>
        </div>
        <div className="boder-white w-[1px] border border-l border-dashed"></div>
        <div className="text-sm font-medium">
          <p className="uppercase text-hightLight">Ngân hàng: </p>
          <div className="h-3"></div>
          <p>{params.bankCode}</p>
        </div>
        <div className="boder-white w-[1px] border border-l border-dashed"></div>
        <div className="text-sm font-medium">
          <p className="uppercase text-hightLight">Nội dung: </p>
          <div className="h-3"></div>
          <p>{params.orderInfo}</p>
        </div>
      </div>

      <div className="mt-12">
        <div className="mx-auto w-1/2">
          <Link to="/">
            <Button type="primary" twClasses="w-full">
              Tiếp tục mua hàng
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Received;
