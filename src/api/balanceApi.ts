import axiosInstance from "./axiosInstance";
import { transformResponse } from "./utils";

const balanceApi = {
  async QueryBalance(data: any) {
    const response = await axiosInstance({
      method: "GET",
      url: "balance/query",
      params: data,
    });

    return transformResponse(response);
  },
};

export default balanceApi;
