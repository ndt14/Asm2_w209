
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pause } from '../utils/pause';
import { Product } from '../interface/Product';

const productApi = createApi({
    reducerPath: "product",
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8088/api/",
        fetchFn: async (...arg) => {
            await pause(1000)
            return await fetch(...arg);
        }
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => `/products`,
            providesTags: ['Product']
        }),
        getProductById: builder.query<Product, number | string>({
            query: (id) => `/products/${id}`,
            providesTags: ['Product']
        }),
        removeProduct: builder.mutation<void, number | string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Product']
        }),
        addProduct: builder.mutation<Product, Product>({
            query: (product) => ({
                url: `/products`,
                method: "POST",
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation<Product, Product>({
            query: (product) => ({
                url: `/products/${product._id}`,
                method: "PUT",
                body: product
            }),
            invalidatesTags: ['Product']
        })
    })
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useRemoveProductMutation } = productApi;
export const productReducer = productApi.reducer;
export default productApi;