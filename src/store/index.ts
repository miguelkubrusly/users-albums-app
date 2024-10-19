import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { userReducer, addUser, removeUser } from "./slices/userSlice";

const store: EnhancedStore = configureStore({
  reducer: {
    users: userReducer,
  },
});

export { store, addUser, removeUser };
