/// <reference types="react-scripts" />
import { SerializedError } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store/store";
declare global {
  type User = {
    name: string;
    albums?: any[];
    id: string;
  };

  type State = {
    data: User[];
    isLoading: boolean;
    error: SerializedError | null;
    openIndex: number;
  };

  {
    AppDispatch, RootState;
  }
}
export {};
