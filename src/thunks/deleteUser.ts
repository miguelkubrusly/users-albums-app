import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pause } from "../utils/pause";

const deleteUser = createAsyncThunk("users/delete", async (id: number) => {
  await axios.delete(`http://localhost:3005/users/${id}`);

  //DEV ONLY: custom pause
  await pause(500);

  return id;
});

export { deleteUser };
