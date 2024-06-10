import { HTTP_METHODS } from "../constants";
import { ICreatePaymentUrlRequest } from "../interface";
import axiosInstance from "./axiosInstance";
import { transformResponse } from "./utils";

const transactionApi = {
  async CreatePaymentUrl(data: ICreatePaymentUrlRequest) {
    const response = await axiosInstance({
      method: HTTP_METHODS.POST,
      url: "transaction/create-payment-url",
      data,
    });

    return transformResponse(response);
  },
};

export default transactionApi;
