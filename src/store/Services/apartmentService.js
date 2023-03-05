import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apartmentApi = createApi({
  reducerPath: "apartmentApi", // a unique key that defines where the redux store will store the cache.
  baseQuery: fetchBaseQuery({
    // the base query used by each endpoint to request data.
    baseUrl: `${process.env.REACT_APP_DEV_BASE_URL}`,
    // baseUrl: "http://adminhitl-001-site1.ctempurl.com/api/",
  }),
  tagTypes: ["Apartment"],
  endpoints: (builder) => ({
    // actions we want to perform.

    //get all apartment
    getAllApartment: builder.query({
      query: () => "apartment",
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
  }),
});

//custom hooks
export const {
  useGetAllApartmentQuery,
  useGetAllRoomTypeQuery,
  useSortPropertyQuery,
  useCheckForAvailabilityMutation,
  useReserveNowMutation,
} = apartmentApi;
