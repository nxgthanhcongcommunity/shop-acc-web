import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import invoiceApi from "../../api/invoiceApi";
import { Button, PrivateRoute } from "../../components";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";

interface IInvoice {
  code: string;
  totalAmount: number;
  discount: number;
  paymentStatus: string;
  paymentMethod: string;
  createdAt: string;
  invoiceDetails: [];
}

const ReceivedTab = () => {
  const auth = useSelector((state: RootState) => state.auth);
  console.log(auth);
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const [invoice, setInvoice] = useState<IInvoice>();

  useEffect(() => {
    if (!code) return;

    (async () => {
      const { succeed, data }: { succeed: boolean; data: IInvoice } =
        await invoiceApi.GetInvoiceByCode({ code });
      if (!succeed) return;
      setInvoice(data);
    })();
  }, [code]);

  if (!invoice) {
    return <p>loading...</p>;
  }

  return (
    <>
      <PrivateRoute />

      <div>
        <h2 className="mb-6 text-xl font-medium text-hightLight">
          Cảm ơn bạn, đơn hàng đã được ghi nhận. Chúng tôi gửi thông tin tài
          khoản qua email:{" "}
          <span className="text-3like">{auth.entity?.email}</span>
        </h2>
        <div className="flex items-stretch gap-x-10 bg-primary p-8">
          <div className="text-sm font-medium">
            <p className="uppercase text-hightLight">Mã đơn hàng: </p>
            <div className="h-3"></div>
            <p>{invoice.code}</p>
          </div>
          <div className="boder-white w-[1px] border border-l border-dashed"></div>
          <div className="text-sm font-medium">
            <p className="uppercase text-hightLight">Ngày mua hàng: </p>
            <div className="h-3"></div>
            <p>{invoice.createdAt}</p>
          </div>
          <div className="boder-white w-[1px] border border-l border-dashed"></div>
          <div className="text-sm font-medium">
            <p className="uppercase text-hightLight">Tổng cộng: </p>
            <div className="h-3"></div>
            <p>{invoice.totalAmount} vnđ</p>
          </div>
          <div className="boder-white w-[1px] border border-l border-dashed"></div>
          <div className="text-sm font-medium">
            <p className="uppercase text-hightLight">Hình thức thanh toán: </p>
            <div className="h-3"></div>
            <p>{invoice.paymentMethod}</p>
          </div>
        </div>
        <h1 className="mb-4 mt-16 text-2xl font-bold">Chi tiết đơn hàng</h1>
        <div className="bg-primary px-12 py-4">
          <ul>
            {invoice.invoiceDetails.map((detail: any) => (
              <li>
                <div className="flex justify-between border-b border-slate-800 py-7 text-lg font-medium">
                  <p>{detail.product.name}</p>
                  <span>{detail.unitPrice}</span>
                </div>
              </li>
            ))}

            <li>
              <div className="flex justify-between border-b border-slate-800 py-7 text-lg font-medium">
                <p>Tổng phụ</p>
                <span>{invoice.totalAmount} vnđ</span>
              </div>
            </li>

            <li>
              <div className="flex justify-between py-7 text-2xl font-medium text-3like">
                <p>Tổng cộng</p>
                <span>{invoice.totalAmount} vnđ</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <div className="ml-auto w-1/2">
            <Link to="/">
              <Button type="primary" twClasses="w-full">
                Tiếp tục mua hàng
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceivedTab;
