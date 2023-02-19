import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const staffApi = createApi({
  reducerPath: "staffApi", // a unique key that defines where the redux store will store the cache.
  baseQuery: fetchBaseQuery({
    // the base query used by each endpoint to request data.

    baseUrl: "http://adminhitl-001-site1.ctempurl.com/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().StaffDataReducer.staffInfo.accessToken;
      headers.set("Access-Control-Expose-Headers", "access-token");
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Access-Control-Allow-Methods", "*");
      headers.set("Access-Control-Allow-Credentials", true);

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Staff"],
  endpoints: (builder) => ({
    // actions we want to perform.

    //get all apartments
    getAllApartments: builder.query({
      query: () => "apartment",
    }),

    //get all paid reservations
    getAllReservations: builder.query({
      query: () => "reservation/bookings",
    }),

    //get all reservations
    getAllBookings: builder.query({
      query: () => "reservation/all-bookings",
    }),

    //staff registration
    registerNewStaff: builder.mutation({
      query: (data) => ({
        url: "/user",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),

    //staff login
    loginNewStaff: builder.mutation({
      query: (values) => ({
        url: "/user/login",
        method: "POST",
        body: values,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      // transformResponse: (response) => response.data,
      // transformResponse(response, meta) {
      //   console.log(meta.response);
      // },
      // transformResponse(apiResponse, meta) {
      //   return {
      //     apiResponse,
      //     header: meta.response.headers,
      //   };
      // },
      invalidatesTags: ["Staff"],
    }),

    //create room
    createRoom: builder.mutation({
      query: ({ apartmentId, data }) => ({
        url: `/room/apartment/${apartmentId}/create-room-type`,
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),

    //edit room
    editRoom: builder.mutation({
      query: ({ apartmentId, data }) => ({
        url: `/room/apartment/${apartmentId}/update-room-type`,
        method: "PUT",
        body: data,
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
  useGetAllApartmentsQuery,
  useGetAllReservationsQuery,
  useGetAllBookingsQuery,
  useRegisterNewStaffMutation,
  useLoginNewStaffMutation,
  useCreateRoomMutation,
  useEditRoomMutation,
} = staffApi;
