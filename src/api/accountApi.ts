import axiosInstance from "./axiosInstance";
import { transformResponse } from "./utils";

const accountApi = {
  async LoginWithGoogle(data: any) {
    const response = await axiosInstance({
      method: "POST",
      url: "auth/google",
      data: { ...data },
    });

    return response;
  },

  async GetBalanceByAccountId(data: any) {
    const response = await axiosInstance({
      method: "GET",
      url: "account/get-balance-by-accountId",
      params: data,
    });

    return transformResponse(response);
  },
};

export default accountApi;
