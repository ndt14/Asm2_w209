import { pause } from '../utils/pause';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../interface/Product';

const productApi = createApi({
    reducerPath: "product",
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("access_token");
            headers.set("authorization", `Bearer ${token}`)
            // modify header theo từng request
            return headers;
        },
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        }
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product, void>({
            query: () => `/products`,
            providesTags: ['Product']
        }),
        getProductById: builder.query<Product, number | string>({
            query: (id) => `/products/${id}`,
            providesTags: ['Product']
        }),
        addProduct: builder.mutation({
            query: (product: Product) => ({
                url: `/products`,
                method: "POST",
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation<Product, Product>({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: "PATCH",
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        removeProduct: builder.mutation<void, number>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Product']
        })
    })
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useUpdateProductMutation,
    useRemoveProductMutation,
    useAddProductMutation
} = productApi;
export const productReducer = productApi.reducer;

export default productApi;