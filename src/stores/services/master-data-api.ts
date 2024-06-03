import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./base-query";
import { transformResponse } from "./utilities";

const api = createApi({
    baseQuery,
    endpoints: (build) => ({
        getCategoriesByBannerCode: build.query<any, void>({
            query: (code) => `category/get-categories-by-banner-code?code=${code}`,
            transformResponse,
        }),
        getProductsByCategoryCode: build.query<any, void>({
            query: (code) => `product/get-products-by-category-code?code=${code}`,
            transformResponse,
        }),
        getProductByCode: build.query<any, void>({
            query: (code) => `product/get-product-by-code?code=${code}`,
            transformResponse,
        }),
    }),
});

export const {

    useGetCategoriesByBannerCodeQuery,
    useGetProductsByCategoryCodeQuery,
    useGetProductByCodeQuery,

} = api;
export default api;