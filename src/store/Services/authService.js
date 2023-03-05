import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authsApi", // a unique key that defines where the redux store will store the cache.
  baseQuery: fetchBaseQuery({
    // the base query used by each endpoint to request data.
    // baseUrl: `${process.env.REACT_APP_DEV_BASE_URL}`,
    baseUrl: "http://adminhitl-001-site1.ctempurl.com/api/",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // actions we want to perform.
    //POST requests
    //user registration
    registerNewUser: builder.mutation({
      query: (data) => ({
        url: "/guest",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),

    //user login
    loginNewUser: builder.mutation({
      query: (values) => ({
        url: "/guest/login",
        method: "POST",
        body: values,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),

    //user login
    subscriber: builder.mutation({
      query: (values) => ({
        url: "/util/subscribers",
        method: "POST",
        body: values,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),

    //reset password
    resetPassword: builder.mutation({
      query: (values) => ({
        url: "/guest/update-password",
        method: "POST",
        body: values,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),

    //update password
    updatePassword: builder.mutation({
      query: ({ code, values }) => ({
        url: `/guest/update-password/${code}`,
        method: "PUT",
        body: values,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

//custom hooks
export const {
  useRegisterNewUserMutation,
  useLoginNewUserMutation,
  useSubscriberMutation,
  useResetPasswordMutation,
  useUpdatePasswordMutation,
} = authApi;
