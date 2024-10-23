import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { usePause } from "../hooks/use-pause";

const deleteUser = createAsyncThunk("users/delete", async (id: string) => {
  await axios.delete(`http://localhost:3005/users/${id}`);
  await usePause(1000);

  return id;
});

export { deleteUser };
