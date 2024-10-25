import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userReducer } from "./slices/userSlice";
import { albumsApi } from "./apis/albumsApi";

const store = configureStore({
  reducer: {
    users: userReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export { store };
export * from "../thunks/fetchUsers";
export * from "../thunks/addUser";
export * from "../thunks/deleteUser";
export { useFetchAlbumsQuery, useAddAlbumMutation } from "./apis/albumsApi";
