import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: [],
    isLoading: false,
    error: null,
    openIndex: 0,
};
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});
export const userReducer = userSlice.reducer;
//# sourceMappingURL=userSlice.js.map