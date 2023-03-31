import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const staffApi = createApi({
  reducerPath: "staffApi", // a unique key that defines where the redux store will store the cache.
  baseQuery: fetchBaseQuery({
    // the base query used by each endpoint to request data.
    // baseUrl: `${process.env.REACT_APP_DEV_BASE_URL}`,
    baseUrl: "http://adminhitl-001-site1.ctempurl.com/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().StaffDataReducer.staffInfo?.data?.accessToken;
      headers.set("Access-Control-Expose-Headers", "access-token");
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Access-Control-Allow-Methods", "*");
      headers.set("Access-Control-Allow-Credentials", true);
      console.log(token);
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Staff"],
  endpoints: (builder) => ({
    // actions we want to perform.

    //get all categories
    getAllCategories: builder.query({
      query: () => "settings/categories",
    }),

    //get all states
    getAllStates: builder.query({
      query: () => "util/countries",
    }),

    //get all states
    getAllCheckIns: builder.query({
      query: () => "room/check-in",
    }),

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

    //get all staffs
    getAllStaffs: builder.query({
      query: () => "user",
    }),
    //get room
    getRoom: builder.query({
      query: () => "room",
    }),

    //get all enquiries
    getAllEnquiries: builder.query({
      query: () => "enquiry/enquiries",
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
      query: ({ apartmentId, roomTypeId, data }) => ({
        url: `/room/apartment/${apartmentId}/update-room-type/${roomTypeId}`,
        method: "PUT",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),

    //create apartment
    createApartment: builder.mutation({
      query: (data) => ({
        url: "/apartment",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),

    //edit apartment
    editApartment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/apartment/${id}`,
        method: "PUT",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),

    //delete user
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),

    //create categories
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/settings/categories",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),

    //edit category
    editCategory: builder.mutation({
      query: ({ id, categoryName }) => ({
        url: `/settings/categories/${id}/${categoryName}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),

    //check in
    checkIn: builder.mutation({
      query: (data) => ({
        url: "room/check-in",
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["User"],
    }),

    //check out
    checkOut: builder.mutation({
      query: (reservationId) => ({
        url: `/room/check-out/${reservationId}`,
        method: "POST",
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
  useGetAllCategoriesQuery,
  useGetAllStatesQuery,
  useGetAllApartmentsQuery,
  useGetAllCheckInsQuery,
  useGetAllStaffsQuery,
  useGetAllReservationsQuery,
  useGetAllBookingsQuery,
  useGetAllEnquiriesQuery,

  useGetRoomQuery,
  useRegisterNewStaffMutation,
  useLoginNewStaffMutation,
  useCreateRoomMutation,
  useEditRoomMutation,
  useCreateApartmentMutation,
  useEditApartmentMutation,
  useDeleteUserMutation,
  useCreateCategoryMutation,
  useEditCategoryMutation,
  useCheckInMutation,
  useCheckOutMutation,
} = staffApi;
