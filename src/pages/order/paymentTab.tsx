import { Link } from "react-router-dom";
import { Button } from "../../components";
import { useTotal } from "../../hooks";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";

const PaymentTab = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const checkedItems = items.filter((item) => item.isChecked === true);
  const [total] = useTotal(checkedItems);

  return (
    <>
      <h1 className="mb-4 mt-16 text-2xl font-bold">Review lại đơn hàng</h1>
      <div className="bg-primary px-12 py-4">
        <ul>
          {checkedItems &&
            checkedItems.map((item) => (
              <li key={item.code}>
                <div className="grid grid-cols-[3fr_1fr_1fr] border-b border-slate-800 py-7 text-lg font-medium">
                  <p>{item.name}</p>
                  <span className="text-right">
                    {item.quantity} x {item.price} vnđ
                  </span>
                  <span className="text-right">
                    {item.quantity * item.price} vnđ
                  </span>
                </div>
              </li>
            ))}
          <li>
            <div className="grid grid-cols-[4fr_1fr] border-b border-slate-800 py-7 text-lg font-medium">
              <p>Tổng phụ</p>
              <span className="text-right">{total} vnđ</span>
            </div>
          </li>
          <li>
            <div className="grid grid-cols-[4fr_1fr] border-b border-slate-800 py-7 text-lg font-medium">
              <p>Hình thức thanh toán</p>
              <span className="text-right">Điểm</span>
            </div>
          </li>

          <li>
            <div className="grid grid-cols-[4fr_1fr] py-7 text-2xl font-medium text-3like">
              <p>Tổng cộng</p>
              <span className="text-right">{total} vnđ</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <div className="ml-auto w-1/2">
          <Link to="/order/received">
            <Button type="primary" twClasses="w-full">
              Thanh toán
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentTab;
