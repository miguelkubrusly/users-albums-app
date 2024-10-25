import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { pause } from "../utils/pause";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  //DEV ONLY: custom pause
  await pause(1000);

  return response.data;
});

export { fetchUsers };
