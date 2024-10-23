import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { usePause } from "../hooks/use-pause";

const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.name.fullName(),
  });
  //DEV ONLY: custom usePause
  await usePause(1000);
  console.log(response.data);
  return response.data;
});
export { addUser };
