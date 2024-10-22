import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  //DEV ONLY: custom pause
  const pause = (duration: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  };
  await pause(10000);

  return response.data;
});

export { fetchUsers };
