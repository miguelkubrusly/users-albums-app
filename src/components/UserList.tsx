//todo

//create user list render

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../thunks/fetchUsers";
import { AppDispatch, RootState } from "../store/store";
import Skeleton from "./Skeleton";

function UserList() {
  const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading, error } = useSelector((state: RootState) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton times={7} className="h-10 w-11/12 mx-auto mt-4" />;
  }
  if (error) {
    return <div>Error fetching data...</div>;
  }
  return <div>{data.length}</div>;
}

export default UserList;
