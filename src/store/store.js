// import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

// import rootReducer from "./rootReducer";

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// // export const useAppDispatch = () => useDispatch();

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { apartmentApi } from "./Services/apartmentService";
import { authApi } from "./Services/authService";

import { UserDataReducer } from "./Slice/authSlice";
import { ApartmentDataReducer } from "./Slice/roomSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [apartmentApi.reducerPath]: apartmentApi.reducer,
    UserDataReducer: UserDataReducer,
    ApartmentDataReducer: ApartmentDataReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      apartmentApi.middleware,
    ]),
});

setupListeners(store.dispatch);
