import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { usePause } from "../hooks/use-pause";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  //DEV ONLY: custom usePause
  await usePause(1000);

  return response.data;
});

export { fetchUsers };
