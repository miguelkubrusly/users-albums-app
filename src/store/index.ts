import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";

const store: EnhancedStore = configureStore({
  reducer: {
    users: userSlice.reducer,
  },
});

export { store };
