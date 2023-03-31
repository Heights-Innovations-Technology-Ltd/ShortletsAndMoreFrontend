import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apartmentApi = createApi({
  reducerPath: "apartmentApi", // a unique key that defines where the redux store will store the cache.
  baseQuery: fetchBaseQuery({
    // the base query used by each endpoint to request data.
    // baseUrl: `${process.env.REACT_APP_DEV_BASE_URL}`,
    baseUrl: "http://adminhitl-001-site1.ctempurl.com/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().UserDataReducer?.userInfo?.accessToken;
      headers.set("Access-Control-Expose-Headers", "access-token");
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Access-Control-Allow-Methods", "*");
      headers.set("Access-Control-Allow-Credentials", true);

      console.log("ddd", token);
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Apartment"],
  endpoints: (builder) => ({
    // actions we want to perform.

    //get all apartment
    getAllApartment: builder.query({
      query: () => "apartment",
    }),

    //get all states
    getAllStates: builder.query({
      query: () => "util/countries",
    }),
    //get all paid reservations
    getAllReservations: builder.query({
      query: (guestEmail) => `reservation/bookings?guestEmail=${guestEmail}`,
    }),

    //get all room types in an apartment
    getAllRoomType: builder.query({
      query: (id) => `room/room-types/${id}`,
    }),

    //sorting list of rooms
    sortProperty: builder.query({
      query: () => `util/configuration`,
    }),

    //check availablity
    checkForAvailability: builder.mutation({
      query: (values) => ({
        url: "/reservation/room-availability",
        method: "POST",
        body: values,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Rooms"],
    }),

    //reserve
    reserveNow: builder.mutation({
      query: (values) => ({
        url: "/reservation",
        method: "POST",
        body: values,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Rooms"],
    }),

    //enquiry
    addEnquiry: builder.mutation({
      query: (values) => ({
        url: "/enquiry/enquiries",
        method: "POST",
        body: values,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Enquiry"],
    }),

    //edit enquiry
    editEnquiry: builder.mutation({
      query: (values) => ({
        url: "/enquiry/enquiries",
        method: "PUT",
        body: values,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Enquiry"],
    }),
  }),
});

//custom hooks
export const {
  useGetAllApartmentQuery,
  useGetAllRoomTypeQuery,
  useGetAllStatesQuery,
  useGetAllReservationsQuery,
  useSortPropertyQuery,
  useCheckForAvailabilityMutation,
  useReserveNowMutation,
  useAddEnquiryMutation,
  useEditEnquiryMutation,
} = apartmentApi;
