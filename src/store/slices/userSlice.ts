import { createSlice } from "@reduxjs/toolkit";
import { JsxElement } from "typescript";

type User = {
  name: string;
  albums: JsxElement[];
  id: string;
};
const userListSlice = createSlice({
  name: "user",
  initialState: {
    data: [] as User[],
    isLoading: false,
    error: null,
    openIndex: 0,
  },
  reducers: {
    addUser(state, action) {
      state.data.push(action.payload);
    },
    removeUser(state, action) {
      state.data.splice(action.payload, 1);
    },
  },
});

export const userReducer = userListSlice.reducer;
export const { addUser, removeUser } = userListSlice.actions;
