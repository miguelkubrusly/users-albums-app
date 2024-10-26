import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { pause } from "../utils/pause";

const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.name.fullName(),
  });
  //DEV ONLY: custom pause
  await pause(500);

  return response.data;
});
export { addUser };
