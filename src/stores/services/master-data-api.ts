import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./base-query";
import { transformResponse } from "./utilities";

const api = createApi({
    baseQuery,
    endpoints: (build) => ({
        homePage: build.query<any, void>({
            query: () => `master-data/home-page`,
            transformResponse,
        }),
    }),
});

export const {
    useHomePageQuery,
} = api;
export default api;