/// <reference types="react-scripts" />
import { SerializedError } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store/store";
declare global {
  type User = {
    name: string;
    id: number;
  };

  type State = {
    data: User[];
  };

  {
    AppDispatch, RootState;
  }
}
export {};
