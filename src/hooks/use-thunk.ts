import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "../store/store";
import { useLoading } from "./use-loading";

const useThunk = <Returned>(
  thunk: AsyncThunk<Returned, void, any>
): [() => void, boolean, Error | null] => {
  const loading = useLoading();
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  const runThunk = useCallback(() => {
    loading.pending();
    dispatch(thunk())
      .unwrap()
      .then(() => loading.fulfilled())
      .catch((error: Error) => loading.reject(error));
  }, [dispatch, thunk]);

  return [runThunk, loading.loading, loading.loadingError];
};

const useThunkWithArg = <Returned, ThunkArg>(
  thunk: AsyncThunk<Returned, ThunkArg, any>
): [(arg: ThunkArg) => void, boolean, Error | null] => {
  const loading = useLoading();
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  const runThunkWithArg = useCallback(
    (arg: ThunkArg) => {
      loading.pending();
      dispatch(thunk(arg))
        .unwrap()
        .then(() => loading.fulfilled())
        .catch((error: Error) => loading.reject(error));
    },
    [dispatch, thunk]
  );

  return [runThunkWithArg, loading.loading, loading.loadingError];
};

export { useThunk, useThunkWithArg };
