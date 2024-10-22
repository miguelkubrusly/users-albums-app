import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../thunks/fetchUsers";
import { AppDispatch, RootState, addUser } from "../store/store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useLoading } from "../hooks/use-loading";

function UserList() {
  const loadingUsers = useLoading();
  const creatingUser = useLoading();

  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => {
    return state.users;
  });

  const handleAddUser = () => {
    creatingUser.pending();
    dispatch(addUser())
      .unwrap()
      .then(() => creatingUser.fulfilled())
      .catch((error) => creatingUser.reject(error));
  };
  const renderedUsers = data.map((user) => (
    <div key={user.id} className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </div>
  ));

  useEffect(() => {
    loadingUsers.pending();
    dispatch(fetchUsers())
      .unwrap()
      .then(() => loadingUsers.fulfilled())
      .catch((error) => loadingUsers.reject(error));
  }, [dispatch]);

  if (loadingUsers.loading) {
    return <Skeleton times={7} className="h-10 w-full" />;
  }
  if (loadingUsers.loadingError) {
    return <div>Error fetching data...</div>;
  }
  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {creatingUser.loading ? (
          "Creating user..."
        ) : (
          <Button onClick={handleAddUser}>+ Add User</Button>
        )}
        {creatingUser.loadingError && "Error creating user"}
      </div>
      {renderedUsers}
    </div>
  );
}

export default UserList;
