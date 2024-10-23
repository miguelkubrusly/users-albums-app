import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteUser, fetchUsers, addUser } from "../store";

const initialState: State = {
  data: [] as User[],
  openIndex: 0,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.data = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (user: User) => user.id !== action.payload
        );
      });
  },
});

export const userReducer = userSlice.reducer;
