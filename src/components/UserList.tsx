//todo

//create user list render

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../thunks/fetchUsers";
import { AppDispatch, RootState } from "../store/store";
import Skeleton from "./Skeleton";
import { addUser } from "../store/store";
import Button from "./Button";

function UserList() {
  const dispatch = useDispatch<AppDispatch>();

  const { data, isLoading, error } = useSelector((state: RootState) => {
    return state.users;
  });

  const handleAddUser = () => {
    dispatch(addUser());
  };

  const renderedUsers = data.map((user) => (
    <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  ));

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton times={7} className="h-10 w-full" />;
  }
  if (error) {
    return <div>Error fetching data...</div>;
  }
  return (
    <div>
      <Button onClick={handleAddUser}>Add New User</Button>
      {renderedUsers}
    </div>
  );
}

export default UserList;
