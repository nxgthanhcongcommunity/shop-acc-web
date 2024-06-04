import axiosInstance from "./axiosInstance";
import { transformResponse } from "./utils";

const invoiceApi = {
  async CreateInvoice(data: any) {
    const response = await axiosInstance({
      method: "POST",
      url: "invoice/create",
      params: data,
    });

    return transformResponse(response);
  },
};

export default invoiceApi;
