export interface ICreatePaymentUrlRequest {
  amount: number;
  provider: "VNPAY" | "MOMO";
}
