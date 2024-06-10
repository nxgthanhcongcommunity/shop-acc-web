import { IGetBalanceByAccountIdRequest } from "../interface";
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

  async GetAccountBalanceByCode(data: IGetBalanceByAccountIdRequest) {
    const response = await axiosInstance({
      method: "GET",
      url: "account/get-account-balance-by-code",
      params: data,
    });

    return transformResponse(response);
  },
};

export default accountApi;
