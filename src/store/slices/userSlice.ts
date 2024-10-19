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
    userList: [] as User[],
    openIndex: 0,
  },
  reducers: {
    addUser(state, action) {
      state.userList.push(action.payload);
    },
    removeUser(state, action) {
      state.userList.splice(action.payload, 1);
    },
  },
});

export const userReducer = userListSlice.reducer;
export const { addUser, removeUser } = userListSlice.actions;
