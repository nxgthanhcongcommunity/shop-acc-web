import { IResponse } from "../models";

export const transformResponse = (response: IResponse) => {
    if (!response.succeed) {
        throw new Error("zz");
    }
    return response.data;
};