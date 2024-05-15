import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./base-query";
import { transformResponse } from "./utilities";

const api = createApi({
    baseQuery,
    endpoints: (build) => ({
        getBanners: build.query<any, void>({
            query: () => `banner/get-banners`,
            transformResponse,
        }),
        getCategoriesByBannerCode: build.query<any, void>({
            query: (code) => `category/get-categories-by-banner-code?code=${code}`,
            transformResponse,
        }),
    }),
});

export const {
    useGetBannersQuery,
    useGetCategoriesByBannerCodeQuery,
} = api;
export default api;