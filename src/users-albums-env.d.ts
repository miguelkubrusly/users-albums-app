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

  type Album = {
    id: number;
    title: string;
    userId: number;
  };

  type FetchFnArgs = [string | Request, RequestInit?];

  type AlbumsListItemProps = {
    album: Album;
  };

  {
    AppDispatch, RootState;
  }
}
export {};
