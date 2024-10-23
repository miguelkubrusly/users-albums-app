import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
const store = configureStore({
    reducer: {
        users: userReducer,
    },
});
export { store };
export * from "../thunks/fetchUsers";
export * from "../thunks/addUser";
//# sourceMappingURL=store.js.map