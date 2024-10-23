import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export { store };
export * from "../thunks/fetchUsers";
export * from "../thunks/addUser";
export * from "../thunks/deleteUser";
