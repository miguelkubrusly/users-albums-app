import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../../thunks/fetchUsers";

const initialState: State = {
  data: [],
  isLoading: false,
  error: null,
  openIndex: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      state.data.push(action.payload);
    },
    removeUser(state, action: PayloadAction<number>) {
      state.data.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const userReducer = userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
