import { Link, useSearchParams } from "react-router-dom";
import { Button } from "../../components";
import { useEffect, useState } from "react";
import { vnpayTransactionApi } from "../../api";
import { paramsToObject } from "../../utils";

interface IParams {
  vnp_Amount: string | null;
  vnp_BankCode: string | null;
  vnp_OrderInfo: string | null;
  vnp_ResponseCode: string | null;
  vnp_TransactionStatus: string | null;
  vnp_TransactionNo: string | null;
  vnp_PayDate: string | null;
  vnp_TxnRef: string | null;
}

const Received = () => {
  const [params, setParams] = useState<IParams>();
  const [isSucceed, setIsSucceed] = useState(false);

  useEffect(() => {
    (async () => {

      const paramsObj = paramsToObject(window.location.search);
      const { succeed, data } = await vnpayTransactionApi.GetReturnResult(paramsObj);

      if (!succeed) return;
      setIsSucceed(data.code == "00");
      setParams(data.vnp_Params);

    })()
  }, []);

  const handleFakeIPN = () => {
    console.log("http://localhost:4003/api/v1/vnpay-transaction/ipn" + window.location.search)
  }

  if (params == null) return <p>loading...</p>;
  if (!isSucceed) return <>có lỗi xải ra....</>

  return (
    <div className="p-8">
      <h2 className="mb-6 text-xl font-medium text-hightLight">
        Bạn đã nạp thành công:{" "}
        <span className="text-3like">{params.vnp_Amount} vnđ</span>
      </h2>
      <div className="flex items-stretch gap-x-10 bg-primary p-8">
        <div className="text-sm font-medium">
          <p className="uppercase text-hightLight">Mã giao dịch: </p>
          <div className="h-3"></div>
          <p>{params.vnp_TxnRef}</p>
        </div>
        <div className="boder-white w-[1px] border border-l border-dashed"></div>
        <div className="text-sm font-medium">
          <p className="uppercase text-hightLight">Ngày giao dịch: </p>
          <div className="h-3"></div>
          <p>{params.vnp_PayDate}</p>
        </div>
        <div className="boder-white w-[1px] border border-l border-dashed"></div>
        <div className="text-sm font-medium">
          <p className="uppercase text-hightLight">Ngân hàng: </p>
          <div className="h-3"></div>
          <p>{params.vnp_BankCode}</p>
        </div>
        <div className="boder-white w-[1px] border border-l border-dashed"></div>
        <div className="text-sm font-medium">
          <p className="uppercase text-hightLight">Nội dung: </p>
          <div className="h-3"></div>
          <p>{params.vnp_OrderInfo}</p>
        </div>
      </div>

      <div className="mt-12">
        <div className="mx-auto w-1/2">
          <Button type="primary" twClasses="w-full" onClick={handleFakeIPN}>
            Tại môi trường test, vui lòng click thêm nút này
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Received;
